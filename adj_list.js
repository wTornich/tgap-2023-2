
import Graph from './lib/graph.class.js'

const g = new Graph()

// Adicionando os vértices
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')

// Adicionando as arestas

g.addEdge('A', 'C')
g.addEdge('B', 'C')
g.addEdge('D', 'C')
g.addEdge('D', 'E')
g.addEdge('B', 'E')

console.log(g)

