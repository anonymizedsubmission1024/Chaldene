import { type Node } from './Node';
import { type Edge } from './Edge';

export interface Graph {
  nodes: Node[];
  edges: Edge[];
}

export const defaultGraph: Graph = {
  nodes: [],
  edges: []
};
