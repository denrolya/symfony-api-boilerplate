## Additional requirements
* [Elasticsearch 5+](https://www.elastic.co/downloads/elasticsearch)

## Installation
1. $: `composer install`
    * Set only the database parameters, skip the others
2. $: `bin/console doctrine:database:create && bin/console doctrine:schema:create && bin/console hautelook_alice:doctrine:fixtures:load --no-interaction`
    * This creates the database, populates it with test data && automatically indexes them with elasticsearch
    
## Description

   #### Third party bundles used:
   * [`hautelook/alice-bundle`](https://github.com/hautelook/AliceBundle/tree/1.x) - for easy fixture generation from yaml files. Can be found under src/AppBundle/DataFixtures
   * [`friendsofsymfony/rest-bundle`](https://github.com/FriendsOfSymfony/FOSRestBundle) - bundle for API creation 
   * [`friendsofsymfony/elastica-bundle`](https://github.com/FriendsOfSymfony/FOSElasticaBundle/blob/4.0.x/Resources/doc/index.md) - elasticsearch integration into symfony. Check out `bin/console | grep elastica` for available commands
   * [`jms/serializer-bundle`](https://jmsyst.com/libs/serializer) - bundle used for serialization, here for API responses serialization.
   * [`nelmio/api-doc-bundle`](https://github.com/nelmio/NelmioApiDocBundle/tree/2.x) - bundle that simplyfies creation of API documentation. Examples can be found in src/ApiBundle/Controller/PostApiController.php in `ApiDoc` annotation.
   
   #### Useful aliases
    alias compi='composer install'
    alias compu='composer update'
    alias bc='php bin/console'
    alias cl='bc cache:clear'
    alias clall='cl -e prod && cl && cl -e test'
    alias fadb='bc doctrine:database:drop -e test --force && bc doctrine:database:create -e test && bc doctrine:schema:create -e test && bc hautelook_alice:doctrine:fixtures:load -e test'
    alias fixtures='bc hautelook_alice:doctrine:fixtures:load --no-interaction'
    
   #### Links to check
   * [Apache configuration](http://symfony.com/doc/current/setup/web_server_configuration.html)
   * [Symfony permissions fix](https://symfony.com/doc/current/setup/file_permissions.html)
   * [Angular Git Commit Messages Guideline](https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md#commit) 