#pip install flask
#pip install flask_cors
#pip install google-auth
#pip install google-api-python-client

import os
from google_auth_oauthlib.flow import InstalledAppFlow
from googleapiclient.discovery import build
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

scopes = ["https://www.googleapis.com/auth/youtube.force-ssl"]

def subscribe_to_channel(channel_id):
    os.environ["OAUTHLIB_INSECURE_TRANSPORT"] = "1"

    api_service_name = "youtube"
    api_version = "v3"
    client_secrets_file = 'C:/Users/volta/Desktop/test/freelancer/client/clientsecret.json'

    # Get credentials and create an API client
    flow = InstalledAppFlow.from_client_secrets_file(client_secrets_file, scopes)
    credentials = flow.run_local_server(port=5000)
    service = build(api_service_name, api_version, credentials=credentials)

    request = service.subscriptions().insert(
        part="snippet",
        body={
            "snippet": {
                "resourceId": {
                    "channelId": "UCjLuDK6daotQxTcjdLsyUzQ"
                }
            }
        }
    )
    response = request.execute()

    if 'snippet' in response:
        print("Abonelik başarıyla gerçekleştirildi.")
        return {'success': True}
    else:
        print("Abonelik gerçekleştirilemedi.")
        return {'success': False}

@app.route('/subscribe', methods=['POST'])
def subscribe():
    channel_id = request.json.get('channelId')

    subscribe_to_channel(channel_id)

    response = {'success': True}

    return jsonify(response)

if __name__ == '__main__':
    app.run(port=7000)