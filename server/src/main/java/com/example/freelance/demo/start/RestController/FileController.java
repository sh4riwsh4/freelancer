package com.example.freelance.demo.start.RestController;

import com.example.freelance.demo.start.service.concretes.S3FileDownloadService;
import com.example.freelance.demo.start.service.concretes.S3FileUploadService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.core.io.FileSystemResource;
import org.springframework.core.io.Resource;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api")
public class FileController {

    @Autowired
    private S3FileUploadService s3FileUploadService;

    @PostMapping("/upload")
    public String handleFileUpload(@RequestParam MultipartFile file) throws IOException {
        // Orijinal dosya adını alın
        String originalFilename = file.getOriginalFilename();

        // .tmp uzantısını .png ile değiştirerek geçici dosya adını oluşturun
        String tempFileName = originalFilename;

        // MultipartFile'ı geçici bir dosyaya kaydedin
        File tempFile = File.createTempFile(tempFileName, "");
        // Dosyayın adını düzenle, sadece ".png" kısmını bırak
        String fileNameWithoutExtension = tempFile.getName().replaceFirst("[.][^.]+$", "");

        // Yeni dosya adını kullanarak yeni bir File oluştur
        File renamedTempFile = new File(tempFile.getParent(), fileNameWithoutExtension+".png");

        // Geçici dosyayı adını düzenlenmiş adıyla değiştir
        if (tempFile.renameTo(renamedTempFile)) {
            System.out.println(renamedTempFile);
            file.transferTo(renamedTempFile);
            // Dosyayı Amazon S3'ye yükleyin
            String eTag = s3FileUploadService.uploadFile(renamedTempFile);
            // Geçici dosyayı silin
            renamedTempFile.delete();

            return "Dosya yükleme başarılı. ETag: " + eTag;
        } else {
            // Dosya adını değiştirme başarısızsa bir hata mesajı döndür
            return "Dosya adını düzenlerken bir hata oluştu.";
        }
    }
    @Autowired
    private S3FileDownloadService s3FileDownloadService;

    @GetMapping("/download/{filename}")
    public ResponseEntity<Resource> downloadFile(@PathVariable String filename) {
        // Dosya indirme işlemini gerçekleştirir.
        File downloadedFile = s3FileDownloadService.downloadFile(filename);

        // Dosyanın Resource nesnesine dönüştürülmesi
        Resource resource = new FileSystemResource(downloadedFile);

        // Başlık ayarlarını yapar ve dosyayı döndürür.
        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + downloadedFile.getName() + "\"")
                .body(resource);
    }

}



