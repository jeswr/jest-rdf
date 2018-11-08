import {blankNode, namedNode, quad} from "@rdfjs/data-model";
import * as RDF from "rdf-js";
import "../../index";

describe('#toEqualRdfQuadArray', () => {
  it('should succeed for equal quad arrays', () => {
    return expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]);
  });

  it('should succeed for equal generalized quad arrays', () => {
    return expect([
      quad<RDF.BaseQuad>(
        blankNode('s1'),
        blankNode('p1'),
        blankNode('o1'),
        blankNode('g1'),
      ),
      quad<RDF.BaseQuad>(
        blankNode('s2'),
        blankNode('p2'),
        blankNode('o2'),
        blankNode('g2'),
      ),
      quad<RDF.BaseQuad>(
        blankNode('s3'),
        blankNode('p3'),
        blankNode('o3'),
        blankNode('g3'),
      ),
    ]).toEqualRdfQuadArray([
      quad<RDF.BaseQuad>(
        blankNode('s1'),
        blankNode('p1'),
        blankNode('o1'),
        blankNode('g1'),
      ),
      quad<RDF.BaseQuad>(
        blankNode('s2'),
        blankNode('p2'),
        blankNode('o2'),
        blankNode('g2'),
      ),
      quad<RDF.BaseQuad>(
        blankNode('s3'),
        blankNode('p3'),
        blankNode('o3'),
        blankNode('g3'),
      ),
    ]);
  });

  it('should not fail for equal quad arrays', () => {
    return expect(() => expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).not.toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });

  it('should not succeed for quad arrays with different length', () => {
    return expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).not.toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
    ]);
  });

  it('should fail for quad arrays with different length', () => {
    return expect(() => expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });

  it('should not succeed for quad arrays with equal length but different contents', () => {
    return expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).not.toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
    ]);
  });

  it('should fail for quad arrays with equal length but different contents', () => {
    return expect(() => expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        namedNode('s3'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).toEqualRdfQuadArray([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
      quad(
        namedNode('s1'),
        namedNode('p1'),
        namedNode('o1'),
        namedNode('g1'),
      ),
    ])).toThrowErrorMatchingSnapshot();
  });
});
