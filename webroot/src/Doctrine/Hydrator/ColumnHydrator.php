<?php

namespace App\Doctrine\Hydrator;

use Doctrine\DBAL\Exception;
use Doctrine\ORM\Internal\Hydration\AbstractHydrator;

/**
 * Class ColumnHydrator.
 *
 * Used to hydrate results as a non-associative scalar array.
 */
class ColumnHydrator extends AbstractHydrator
{
    /**
     * @return array<mixed>
     *
     * @throws Exception
     */
    protected function hydrateAllData(): array
    {
        return ($this->stmt) ? $this->stmt->fetchFirstColumn() : [];
    }
}
