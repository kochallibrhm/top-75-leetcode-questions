//Runtime: 171 ms Beats 37.59% || Memory: 43.2 MB Beats 48.3%
 
/*  
// Definition for a Node.
public class Node {
    public int val;
    public IList<Node> neighbors;

    public Node() {
        val = 0;
        neighbors = new List<Node>();
    }

    public Node(int _val) {
        val = _val;
        neighbors = new List<Node>();
    }

    public Node(int _val, List<Node> _neighbors) {
        val = _val;
        neighbors = _neighbors;
    }
}
*/

public class Solution {
    public Node CloneGraph(Node node) {
       if(node == null)
            return null;
        if(node.neighbors.Count == 0)
            return new Node(node.val);

        Dictionary<Node, Node> dict = new Dictionary<Node, Node>();
        dict.Add(node, new Node(node.val));
        Queue<Node> queue = new Queue<Node>();
        queue.Enqueue(node);

        while(queue.Count > 0){
            var current = queue.Dequeue();
            foreach(var neighbor in current.neighbors){
                if(!dict.ContainsKey(neighbor)){
                    dict.Add(neighbor, new Node(neighbor.val));
                    queue.Enqueue(neighbor);
                }
                dict[current].neighbors.Add(dict[neighbor]);
            }
        }
        return dict[node];
    }
}

/*
Given a reference of a node in a connected undirected graph.

Return a deep copy (clone) of the graph.

Each node in the graph contains a value (int) and a list (List[Node]) of its neighbors.

class Node {
    public int val;
    public List<Node> neighbors;
}
 

Test case format:

For simplicity, each node's value is the same as the node's index (1-indexed). For example, the first node with val == 1, the second node with val == 2, and so on. The graph is represented in the test case using an adjacency list.

An adjacency list is a collection of unordered lists used to represent a finite graph. Each list describes the set of neighbors of a node in the graph.

The given node will always be the first node with val = 1. You must return the copy of the given node as a reference to the cloned graph.
*/
