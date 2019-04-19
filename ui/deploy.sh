heroku git:remote -a cinemacaco
git push origin master
git subtree push --prefix ui heroku master

# ng build --prod
# firebase login
# firebase deploy