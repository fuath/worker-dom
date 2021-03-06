/**
 * Copyright 2018 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import test from 'ava';
import { NodeType } from '../../worker-thread/dom/Node';
import { HTMLAnchorElement } from '../../worker-thread/dom/HTMLAnchorElement';

test.beforeEach(t => {
  t.context = {
    element: new HTMLAnchorElement(NodeType.ELEMENT_NODE, 'a', null),
  };
});

test('toString should be empty by default', t => {
  const { element } = t.context as { element: HTMLAnchorElement };

  t.is(element.toString(), '');
});

test('toString should return href after property change', t => {
  const { element } = t.context as { element: HTMLAnchorElement };

  element.href = 'https://www.ampbyexample.com';
  t.is(element.toString(), 'https://www.ampbyexample.com');
});
