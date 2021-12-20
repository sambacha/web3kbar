import * as React from 'react';
import Code from './Code';

export default function Actions() {
  return (
    <div>
      <h1>Actions</h1>
      <p>
        When a user searches for something in kbar, the result is a list of
        actions. These actions are represented by a simple object data
        structure.
      </p>
      <p>
        The way users register actions is by passing a list of action objects to{' '}
        <code>KBarProvider</code> or through <code>useRegisterActions</code>.
      </p>
      <p>The object looks like this:</p>
      <Code
        code={`interface BaseAction {
    id: string;
    name: string;
    shortcut?: string[];
    keywords?: string;
    perform?: () => void;
    section?: string;
    parent?: ActionId | null;
}`}
      />
      <p>
        kbar manages an internal state of action objects. What we do is take the
        list of actions provided by the user and transform them under the hood
        into our own representation of these objects, <code>ActionImpl</code>.
      </p>
      <p>
        An <code>ActionImpl</code> is an internal implementation of the{' '}
        <code>Action</code> interface:
      </p>
      <Code
        code={`type Action = Omit<BaseAction, "parent"> &{
    parent?: ActionImpl;
    children?: ActionImpl;
}`}
      />
      <p>
        You don't need to know too much of the specifics of{' '}
        <code>ActionImpl</code> – we transform what the user passes to us to add
        a few extra properties that are useful to kbar internally.
      </p>
      <p>All you need to know is:</p>
      <ul>
        <li>
          Pass initial list of actions if you have them to{' '}
          <code>KBarProvider</code>
        </li>
        <li>
          Register actions dynamically by using the{' '}
          <code>useRegisterActions</code> hook
        </li>
      </ul>
      <p>
        Actions can have nested actions, represented by <code>parent</code>{' '}
        above. With this, we can do things like building a folder-like
        experience where toggling one action leads to displaying a "nested" list
        of other actions.
      </p>
      <h3>Static, global actions</h3>
      <p>
        kbar takes an initial list of actions when instantiated. This initial
        list is considered a static/global list of actions. These actions exist
        on each page of your site.
      </p>
      <h3>Dynamic actions</h3>
      <p>
        While it is good to have a set of actions registered up front and
        available globally, sometimes you will want to have actions available
        only when on a specific page, or even when a specific component is
        mounted.
      </p>
      <p>
        Actions can be registered at runtime using the{' '}
        <code>useRegisterActions</code> hook. This dynamically adds and removes
        actions based on where the hook lives.
      </p>
    </div>
  );
}
