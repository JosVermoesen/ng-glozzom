# ng-glozzom - Demo Multi-language site using Bootstrap
## Getting started for users
You can use directly via [demo](https://glossom.rv-services.be)
Your data is stored as json files inside the localStorage of the browser you are using.

## Getting started for developers
- [Install NodeJS](https://nodejs.org/). Hint: eventually install and use [nvm](https://medium.com/@Joachim8675309/installing-node-js-with-nvm-4dc469c977d9) for easy installing and/or switching between node versions
- Clone this repository: `git clone https://github.com/JosVermoesen/ng-glossom.git`.
- Run `npm install` inside the project root.
- Run `ng serve` in a terminal from the project root.
- Profit. :tada:

## Development Tools used for this app
- [NodeJS](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Angular CLI](https://www.npmjs.com/package/@angular/cli): `npm i -g @angular/cli`

## NPM packages used for this app
- [bootstrap](https://www.npmjs.com/package/bootstrap): `npm i bootstrap`
- [bootstrap icons](https://www.npmjs.com/package/bootstrap-icons): `npm i bootstrap-icons`
- [jquery](https://www.npmjs.com/package/jquery): `npm i jquery`
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): `npm i ngx-bootstrap@5.3.2` (or greater)
- [@ngx-translate/core](https://www.npmjs.com/package/@ngx-translate/core): `npm i @ngx-translate/core`
- [@ngx-translate/http-loader](https://www.npmjs.com/package/@ngx-translate/http-loader): `npm i @ngx-translate/http-loader`

- install all packages in one commandline: `npm i bootstrap bootstrap-icons jquery ngx-bootstrap@5.3.2 @ngx-translate/core @ngx-translate/http-loader`

## styles.css
For use of bootstrap, add into styles.css:
```
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
@import '../node_modules/ngx-bootstrap//datepicker//bs-datepicker.css';
```

## Important1: tsconfig.json
Before building, set resolveJsonModule to 'true' :
```
"compilerOptions": {
    ...
    "resolveJsonModule": true,
    ...
```
## Important2: web.config
ONLY OLDER IIS SERVERS: To prevent errors when the client refreshes a page, building for Microsoft IIS hosting needs installing web.config. Save a copy of this file inside your src directory:
```
<configuration>
  <system.webServer>
    <rewrite>
      <rules>
        <rule name="Angular Routes" stopProcessing="true">
          <match url=".*" />
          <conditions logicalGrouping="MatchAll">
            <add input="{REQUEST_FILENAME}" matchType="IsFile" negate="true" />
            <add input="{REQUEST_FILENAME}" matchType="IsDirectory" negate="true" />
          </conditions>
          <action type="Rewrite" url="/index.html" />
        </rule>
      </rules>
    </rewrite>
    <staticContent>
      <mimeMap fileExtension=".json" mimeType="application/json" />
      <mimeMap fileExtension=".svg" mimeType="image/svg+xml" />
    </staticContent>
  </system.webServer>
</configuration>
```
Do not forget to mention the location of web.config in angular.json "assets" when building: 
```
"assets": [... , "src/web.config"],
```