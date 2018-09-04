import {blankNode, namedNode, quad} from "@rdfjs/data-model";
import "../../index";

describe('#toBeRdfIsomorphic', () => {
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
    ]).toBeRdfIsomorphic([
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

  it('should succeed for isomorphic quad arrays', () => {
    return expect([
      quad(
        namedNode('s1'),
        namedNode('p1'),
        blankNode('b1'),
        namedNode('g1'),
      ),
      quad(
        blankNode('b1'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        blankNode('b1'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
    ]).toBeRdfIsomorphic([
      quad(
        blankNode('b2'),
        namedNode('p2'),
        namedNode('o2'),
        namedNode('g2'),
      ),
      quad(
        blankNode('b2'),
        namedNode('p3'),
        namedNode('o3'),
        namedNode('g3'),
      ),
      quad(
        namedNode('s1'),
        namedNode('p1'),
        blankNode('b2'),
        namedNode('g1'),
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
    ]).not.toBeRdfIsomorphic([
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
    ]).not.toBeRdfIsomorphic([
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
    ]).toBeRdfIsomorphic([
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
    ]).not.toBeRdfIsomorphic([
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
    ]).toBeRdfIsomorphic([
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
