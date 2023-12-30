package com.example.freelance.demo.start.service.concretes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.GetObjectResponse;
import software.amazon.awssdk.services.s3.model.S3Object;

import java.io.File;
import java.io.IOException;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;

@Service
public class S3FileDownloadService {

    @Autowired
    private S3Client s3Client;

    @Value("${aws.s3.bucket-name}")
    private String bucketName;

    public File downloadFile(String key) {
        // İndirilen dosyanın geçici bir konumda saklanacağı bir dosya oluşturun
        File downloadedFile = new File(System.getProperty("java.io.tmpdir"), "downloadedFile_" + System.currentTimeMillis());
        // S3'den dosyayı indirin
        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .build();

        GetObjectResponse response = s3Client.getObject(getObjectRequest, downloadedFile.toPath());

        // İndirilen dosyanın yolunu döndürün
        return downloadedFile;
    }

}
