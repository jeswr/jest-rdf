import { DataFactory } from 'rdf-data-factory';
import datasetFactory = require('rdf-dataset-indexed');
import * as RDF from "rdf-js";
import "../../index";

const DF = new DataFactory();

describe('#toBeRdfIsomorphic', () => {
  it('should succeed for equal quad arrays', () => {
    return expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]);
  });

  it('should succeed for equal generalized quad arrays', () => {
    return expect([
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s1'),
        DF.blankNode('p1'),
        DF.blankNode('o1'),
        DF.blankNode('g1'),
      ),
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s2'),
        DF.blankNode('p2'),
        DF.blankNode('o2'),
        DF.blankNode('g2'),
      ),
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s3'),
        DF.blankNode('p3'),
        DF.blankNode('o3'),
        DF.blankNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s1'),
        DF.blankNode('p1'),
        DF.blankNode('o1'),
        DF.blankNode('g1'),
      ),
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s2'),
        DF.blankNode('p2'),
        DF.blankNode('o2'),
        DF.blankNode('g2'),
      ),
      new DataFactory<RDF.BaseQuad>().quad(
        DF.blankNode('s3'),
        DF.blankNode('p3'),
        DF.blankNode('o3'),
        DF.blankNode('g3'),
      ),
    ]);
  });

  it('should succeed for isomorphic quad arrays', () => {
    return expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.blankNode('b1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.blankNode('b1'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.blankNode('b1'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      DF.quad(
        DF.blankNode('b2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.blankNode('b2'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.blankNode('b2'),
        DF.namedNode('g1'),
      ),
    ]);
  });

  it('should work with iterables', () => {
    return expect(datasetFactory([
      DF.quad(
        DF.blankNode('s1a'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ])).toBeRdfIsomorphic(datasetFactory([
      DF.quad(
        DF.blankNode('s1b'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]));
  });

  it('should not fail for equal quad arrays', () => {
    return expect(() => expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).not.toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });

  it('should not succeed for quad arrays with different length', () => {
    return expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).not.toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
    ]);
  });

  it('should fail for quad arrays with different length', () => {
    return expect(() => expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });

  it('should not succeed for quad arrays with equal length but different contents', () => {
    return expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).not.toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
    ]);
  });

  it('should fail for quad arrays with equal length but different contents', () => {
    return expect(() => expect([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s2'),
        DF.namedNode('p2'),
        DF.namedNode('o2'),
        DF.namedNode('g2'),
      ),
      DF.quad(
        DF.namedNode('s3'),
        DF.namedNode('p3'),
        DF.namedNode('o3'),
        DF.namedNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
      DF.quad(
        DF.namedNode('s1'),
        DF.namedNode('p1'),
        DF.namedNode('o1'),
        DF.namedNode('g1'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });
});
