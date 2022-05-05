import React from "react";
import { Table } from "react-bootstrap";

const Blog = () => {
  return (
    <div className="container">
      <h2 className="text-center text-primary">
        Difference between javascript and nodejs
      </h2>
      <h3 className="text-center">
        JS is a scripting language that is a lightweight programming language,
        it's consists of lines of executable computer code.
      </h3>
      <h3 className="text-center">
        Node.js is similar to JavaScript in other words It is framed which is
        based on JavaScript. Node.js provides a cross-platform runtime library
        and it is supports non-blocking by which Input and Output useful for
        application
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>JavaScript</th>
            <th>Node.js</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>JavaScript Vs Node.js Client-side Scripting Language.</td>
            <td>Single Scripting Language.</td>
          </tr>
          <tr>
            <td>It works on the prototype-based.</td>
            <td>It uses a prototypal inheritance model.</td>
          </tr>
          <tr>
            <td>It is an implementation of the ES standard.</td>
            <td>
              It provides a cross-platform and runtime environment for executing
              the code of JS.
            </td>
          </tr>
          <tr>
            <td>JavaScript programming requires a text editor</td>
            <td>Node.js easy integration with JavaScript stacks.</td>
          </tr>
          <tr>
            <td>Mainly used for front-end.</td>
            <td>
              Cross-Platform provides the freedom to develop applications for
              chat and messaging.
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 className="text-center text-primary">
        When should you use nodejs and when should you use mongodb
      </h2>

      <h3 className="text-center"><b>When should you use nodejs </b><br/>
        Node.js is similar to JavaScript in other words It is framed which is
        based on JavaScript. Node.js provides a cross-platform runtime library
        and it is supports non-blocking by which Input and Output useful for
        application.Node Js Mostly use for : A Simple CRUD Application ,A Relational Database-Backed Server-Side App overall node js is use for lighweight cpu application.
      </h3>
      <h3 className="text-center">
      <b>When should you use mongodb </b><br/>
      MongoDB is an object-oriented, simple, dynamic, and scalable NoSQL database. It is based on the NoSQL document store model. The data objects are stored as separate documents inside a collection — instead of storing the data into the columns and rows of a traditional relational database. The motivation of the MongoDB language is to implement a data store that provides high performance, high availability, and automatic scaling. MongoDB is extremely simple to install and implement. MongoDB uses JSON or BSON documents to store data. <br/>
     <b>Good For:</b><br/>
        E-commerce product catalog.<br/>
        Blogs and content management.<br/>
        Real-time analytics and high-speed logging, caching, and high scalability.<br/>
        Configuration management.<br/>
        Maintaining location-based data — Geospatial data.<br/>
        Mobile and social networking sites.<br/>
        Evolving data requirements.<br/>
        Loosely coupled objectives — the design may change by over time.<br/>
      </h3>
      <h2 className="text-center text-primary">
      Differences between sql and nosql databases.
      </h2>
      <h3 className="text-center">
      Differences between sql and nosql databases.
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>SQL</th>
            <th>NoSQL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>These are relational databases with table/rows</td>
            <td>Non-Relational database</td>
          </tr>
          <tr>
            <td>Structured data Contains tables/columns</td>
            <td>Have dynamic schemas for unstructured data.</td>
          </tr>
          <tr>
            <td>Vertically scalable</td>
            <td>
            Horizontally scalable
            </td>
          </tr>
          <tr>
            <td>Table-based</td>
            <td>Document, key-value, graph, or wide-column stores</td>
          </tr>
          <tr>
            <td>Needs larger database server for better performance which can be cost-effective</td>
            <td>
            Instead of purchasing larger servers with more memory, NoSQL databases can scale horizontally, meaning you can add new servers to what you already have as needed.
            </td>
          </tr>
          <tr>
            <td>SQL databases tend to be best for complex queries.</td>
            <td>
            NoSQL databases tend to be the best option for when you are using unstructured data.
            </td>
          </tr>
        </tbody>
      </Table>
      <h2 className="text-center text-primary">
      What is the purpose of jwt and how does it work
      </h2>
      <h3 className="text-center">
      A JSON web token (JWT) is a URL-safe method of transferring claims between two parties. The JWT encodes the claims in JavaScript object notation and optionally provides space for a signature or full encryption.
      </h3>
    </div>
  );
};

export default Blog;
