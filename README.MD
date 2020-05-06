# Oceanography Tool Kit
### Objective
Create a computer program that allows oceanographers and researchers to enter data
 on a user friendly UI that will parse the data and output the visualized data into an 
 intuitive PDF document that will be intuitive and easy to understand for the general public and other researchers
___

### Setup:
```npm i``` 
<br>
```npm start```

___

### Packaging for deployment
```npm install electron-packager --save-dev```<br>
```cd ..```<br>
```electron-packager Oceanography/ OceanographyToolKit```
<br>
or
<br>
```npm i && npm run package```
a folder will appear in the same folder the github repo is stored with the packaged program


Documentation: https://github.com/electron/electron-packager 
<br>
<br>Format for custom packaging: <br>
```electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]```

___

### Development 
#### Tools
- Add the link in the tools.html page then create a separate tool HTML and JS file. This will allow easy scalability for multiple tools in this program
- include the navbar in each new html file you add

### Information: 
Dependencies: <br>
    ```
    "electron-reload": "latest",
    "nan": "^2.14.1",
    "plotly": "^1.0.6",
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
    ```