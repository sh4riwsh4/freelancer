import googleapiclient.discovery
import googleapiclient.errors
from googleapiclient.errors import HttpError

from flask import Flask, jsonify, request
from flask_cors import CORS

youtube = googleapiclient.discovery.build('youtube', 'v3', developerKey='AIzaSyDELKbx9DvHKQa2zBCi2Zrrde_O0hvJJ4w')

app = Flask(__name__)
CORS(app)

@app.route('/api/microtransitions', methods=['POST'])
def perform_microtransition():
    data = request.get_json()
    input_value = data['input']

    # Mikro geçiş işlemini gerçekleştir
    result = check_subscription(input_value)

    # Sonucu JSON olarak döndür
    response = {'result': result}
    return jsonify(response)

channel_id = "UCjLuDK6daotQxTcjdLsyUzQ"
#user_id = "xsutBId6Ar21OTgs0kRuLw"

def check_subscription(user_id):
    try:
        request = youtube.subscriptions().list(
            part='snippet',
            channelId=channel_id,
            forChannelId=channel_id,
            mine=True,
            maxResults=1,
            order='relevance',
            subscriberId=user_id
        )
        response = request.execute()
        
        if 'items' in response and len(response['items']) > 0:
            print("Kullanıcı kanalınıza abone.")
        else:
            print("Kullanıcı kanalınıza abone değil.")
    except HttpError as e:
        print("Hata oluştu:", e)


def subscribe_to_channel(channel_id):
    try:
        # Abonelik isteğini oluştur
        request = youtube.subscriptions().insert(
            part='snippet',
            body={
                'snippet': {
                    'resourceId': {
                        'kind': 'youtube#channel',
                        'channelId': channel_id
                    }
                }
            }
        )

        # Abonelik işlemini gerçekleştir
        response = request.execute()

        print('Abonelik işlemi başarıyla gerçekleştirildi.')
        return response

    except googleapiclient.errors.HttpError as e:
        error_message = e.content.decode("utf-8")
        print(f'Abonelik işlemi başarısız oldu: {error_message}')
        return None

if __name__ == '__main__':
    app.run()