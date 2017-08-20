#ng generate component banner --prefix=app
#ng generate component services --prefix=app
#ng generate component clients --prefix=app
#ng generate component about --prefix=app
#ng g component services/search --prefix=app
#ng g component services/software --prefix=app
#ng g component services/staff --prefix=app
#ng g component services/cloud
#ng g component services/home
#ng g component home/banner
#npm update -D && npm update -S
#npm install material-design-icons --save
#ng g pipe pipes/htmlTags

######### Google Cloud App Engine Build and Deploy sequence ########
sudo npm install -g @angular/cli
ng build
cd build
npm init
npm install --save express
gcloud app deploy --quiet
