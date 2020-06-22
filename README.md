# Ex12bAngularPassingDataBtwCompsParentAndChildThreeWays
Shows 3 ways of components(parent to child) talking to each other
- 1st way; using @Input + @Output, event emitter (see parent, child1)
- 2nd way; using @ViewChild, @AfterViewInit (see parent, child2)
- 3rd way; using Subscription service, via pub/sub model (see parent, child3a, child3b, child3c, child.service)

NOTE ilker with 3rd way, any component can publish to all components that have subscribed to a subscription.

## creation of components and service(pub/sub) via CLI
- generate project
```dos
cd C:/ws_angular
ng new ex12b-angular-passingDataBtwComps-parentAndChild-threeWays  --routing --style=scss
```
- generate components(all in root module, app.module);
```dos
cd ex12b-angular-passingDataBtwComps-parentAndChild-threeWays
ng g c parent
ng g c child1
ng g c child2
ng g c child3a
ng g c child3b
ng g c child3c
```
- generate pub/sub service
```dos
ng g s services/child3
```

## run locally and connect via browser
- run locally
```dos
cd ex12b-angular-passingDataBtwComps-parentAndChild-threeWays
ng serve
# or
ng serve --port 4200
# or
npm run start
# or to run and open it in default browser
ng serve -o
```
- see in browser <br>
http://localhost:4200

## few git commands refresher
- create a new repository on the command line (really no need for this since angular CLI already creates local git repository and .gitignore)
```dos
echo "# ex12b-angular-passingDataBtwComps-parentAndChild-threeWays" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/fdu-csci3444/ex12b-angular-passingDataBtwComps-parentAndChild-threeWays.git
git push -u origin master
```                
- to add github remote, then set upstream of local master to be remote master and finally push local master to remote master
```dos
git remote add origin https://github.com/fdu-csci3444/ex12b-angular-passingDataBtwComps-parentAndChild-threeWays.git
git push -u origin master
# or
git push --set-upstream origin master
# and after above line setting upstream of local master to be remote(named origin) master, can just push via below
git push origin
# or
git push
```

## project created via ng (Angular CLI)
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
