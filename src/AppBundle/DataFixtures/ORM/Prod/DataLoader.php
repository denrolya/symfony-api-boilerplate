<?php
namespace AppBundle\DataFixtures\ORM\Prod;

use Hautelook\AliceBundle\Doctrine\DataFixtures\AbstractLoader;

class DataLoader extends AbstractLoader
{
    /**
    * {@inheritDoc}
    */
    public function getFixtures()
    {
        return  [
            __DIR__ . '/../country.yml',
            __DIR__ . '/../product.yml',
            __DIR__ . '/../status.yml',
        ];
    }
}