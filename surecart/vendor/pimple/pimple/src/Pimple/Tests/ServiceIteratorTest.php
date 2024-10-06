<?php

/*
 * This file is part of Pimple.
 *
 * Copyright (c) 2009 Fabien Potencier
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is furnished
 * to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */

namespace SureCartVendors\Pimple\Tests;

use SureCartVendors\PHPUnit\Framework\TestCase;
use SureCartVendors\Pimple\Container;
use SureCartVendors\Pimple\ServiceIterator;
use SureCartVendors\Pimple\Tests\Fixtures\Service;

class ServiceIteratorTest extends TestCase
{
    public function testIsIterable()
    {
        $pimple = new Container();
        $pimple['service1'] = function () {
            return new Service();
        };
        $pimple['service2'] = function () {
            return new Service();
        };
        $pimple['service3'] = function () {
            return new Service();
        };
        $iterator = new ServiceIterator($pimple, ['service1', 'service2']);

        $this->assertSame(['service1' => $pimple['service1'], 'service2' => $pimple['service2']], iterator_to_array($iterator));
    }
}
