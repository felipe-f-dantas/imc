# imc


Gerando o APK e AAB para instalar em outros dispositivos - Curso de React Native - Aula 46

Na aula de hoje do curso de React Native, vamos aprender como gerar os arquivos APK e AAB para poder distribuir e instalar em outros dispositivos Android.

----- GUIA PASSO-A-PASSO PARA GERAÇÃO DO APK E DO AAB -----

Por padrão existe um APK na pasta "...\android\app\build\outputs\apk\debug" que é gerado para instalar o app no emulador durante o processo de desenvolvimento

---- Atualizar Gradle ----

1) confira a versão atual do seu gradle
./gradle --version
./gradlew --version

2) No site "gradle.org/releases" confira a versão mais atual e digite o comando
./gradlew wrapper --gradle-version 6.7.1 (ou a última versão disponível)

3) Digite novamente o comando "./gradlew --version" para completar o download e verificar a versão atualizada

-------------------------

1 - Entre na pasta do aplicativo

2 - Rode os comandos abaixo para gerar os arquivo de keystore (chave). Uma linha de comando de cada vez

keytool -genkeypair -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

 2.1 - Será necessário inserir uma senha e mais algumas informações 6 digitos (123456).
 2.2 - Ao finalizar serão gerados os arquivos das chaves na pasta ao app (my-release-key.keystore  e  my-upload-key.keystore).

3 - Copie as chaves e cole na pasta app que fica dentro da pasta android do seu projeto
 {seuApp}\android\app

4 - Agora vamos configurar as váriaveis do Gradle
 4.1 - Na pasta android do seu projeto ( {seuApp}\android ) no arquivo gradle.properties insira os comandos a seguir:
 
 MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
 MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
 MYAPP_UPLOAD_STORE_PASSWORD=***Senha que vc digitou antes***
 MYAPP_UPLOAD_KEY_PASSWORD=***Senha que vc digitou antes***

5 - Na pasta ( {seuApp}\android\app ) no arquivo build.gradle insira os comandos dentro de android {signingConfigs}

 release {
            if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                storeFile file(MYAPP_UPLOAD_STORE_FILE)
                storePassword MYAPP_UPLOAD_STORE_PASSWORD
                keyAlias MYAPP_UPLOAD_KEY_ALIAS
                keyPassword MYAPP_UPLOAD_KEY_PASSWORD
            }
        }

5.1 - (e dentro do buildTypes) insira o comando:
 release {
  signingConfig signingConfigs.release
 }

6 - Gerando o arquivo APK

 6.1 - No prompt digite o comando dentro da pasta ( Android ) do seu App digite:
  ./gradlew assembleRelease
 6.2 - Para gerar o AAB para publicar na google play digite o comando:
  ./gradlew bundleRelease

7 - O APK se encontrará na pasta
...\android\app\build\outputs\apk\release

8 - O AAB se encontrará na pasta
...\android\app\build\outputs\bundle\release

-----------------------------------------------------------

React Native é uma biblioteca Javascript criada pelo Facebook. É usada para desenvolver aplicativos para os sistemas Android e IOS de forma nativa.

React Native fornece a API Fetch para suas necessidades de rede. A busca parecerá familiar se você já usou XMLHttpRequestou outras APIs de rede antes.

Em nosso curso de React Native você irá aprender de forma objetiva e simples como criar aplicativos de celular para Android e iOS usando o mesmo código.

Link deste vídeo: https://youtu.be/HuPK62LHCms

Site do canal
http://cfbcursos.com.br
