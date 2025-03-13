package com.pyo.board_back.service.implement;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pyo.board_back.service.FileService;

@Service
public class FileServiceImplement implements FileService{

    @Value("${file.path}")
    private String filePath;
    @Value("${file.url}")
    private String fileUrl;

    @Override
    public String upload(MultipartFile file) {

        if (file.isEmpty()) return null;

        String originalFileName = file.getOriginalFilename();
        String extension = originalFileName.substring(originalFileName.lastIndexOf("."));
        String uuid = UUID.randomUUID().toString();
        String saveFileName = uuid + extension;
        String savePath = filePath + saveFileName;
    }

    @Override
    public Resource getImage(String fileName) {
    }

    
}
