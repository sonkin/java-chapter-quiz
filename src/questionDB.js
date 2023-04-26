export const questionDB = {
  1: {
    title: "Topic 1. Collections",
    subtitle: "Quiz 1. Collections hierarchy",
    questions: [
      {
        text: "Which of the following is NOT a sub-interface of Collection?",
        options: ["List", "Map", "Set", "Queue"],
        answer: "Map",
        explanation:
          "Map is not a sub-interface of Collection. Collection interface and its sub-interfaces (List, Set, Queue) are designed to store and manage single elements, while Map interface is designed to store and manage key-value pairs. Key-value pairs have a unique constraint on keys, which is not directly compatible with the behavior of List, Set, and Queue interfaces. Additionally, the methods provided by the Collection interface, such as add, remove, and contains, do not align with the operations needed for managing key-value pairs, like put, get, and remove based on keys. Keeping Map separate from the Collection hierarchy allows for a more clear and focused design, catering to the specific needs of managing key-value pairs while maintaining the simplicity and consistency of the Collection interfaces for single element collections.",
      },
      {
        text: "Which Java collection interface allows duplicates and access by index?",
        options: ["List", "Set", "Queue", "Map"],
        answer: "List",
        explanation:
          "The List interface is an ordered collection that allows duplicates and access by index. It provides the functionality to add, remove, and iterate over elements while maintaining their order. Set, Queue, and Map, on the other hand, do not support access by index. Set is for unique elements, Queue is for holding elements prior to processing, and Map is for key-value pairs.",
      },

      {
        text: "What do you need to define for custom classes to be used in a HashSet?",
        options: [
          "equals and hashCode methods",
          "toString and clone methods",
          "compareTo and compare methods",
          "serialize and deserialize methods",
        ],
        answer: "equals and hashCode methods",
        explanation:
          "For custom classes to be used in a HashSet, you need to define the equals and hashCode methods. These methods are essential for determining the uniqueness of objects and proper functioning of Set operations, such as adding and removing elements. The other options, toString and clone methods, compareTo and compare methods, and serialize and deserialize methods, are not specifically required for HashSet usage.",
      },

      {
        text: "Which Java List implementation is best for frequent read operations and infrequent write operations?",
        options: ["ArrayList", "LinkedList", "HashSet", "LinkedHashSet"],
        answer: "ArrayList",
        explanation:
          "ArrayList is the best List implementation for frequent read operations and infrequent write operations. It implements a dynamic array, providing fast access to elements by index. LinkedList, on the other hand, is more suited for frequent write operations, while HashSet and LinkedHashSet are Set implementations.",
      },

      {
        text: "Which Set implementation provides constant time performance for adding, removing, and searching elements?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
        answer: "HashSet",
        explanation:
          "HashSet uses a hash table to store elements and provides constant time performance for adding, removing, and searching elements, as long as the hash function is well-designed and there are not too many collisions.",
      },

      {
        text: "Which Set implementation maintains the order of elements?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
        answer: "LinkedHashSet",
        explanation:
          "LinkedHashSet is a Set implementation that maintains the order of elements. HashSet uses a hash table and does not guarantee order, TreeSet orders elements based on a defined sorting criteria, and ArrayList is a List implementation, not a Set implementation.",
      },

      {
        text: "Which data structure does the TreeMap implementation use?",
        options: [
          "Dynamic array",
          "Linked list",
          "Red-black tree",
          "Hash table",
        ],
        answer: "Red-black tree",
        explanation:
          "TreeMap uses a red-black tree data structure to store elements. This allows it to maintain elements in a sorted order according to their natural order or a provided comparator. Dynamic array is used by ArrayList, linked list by LinkedList, and hash table by HashMap.",
      },

      {
        text: "What is the primary difference between Queue and Deque?",
        options: [
          "Duplicates",
          "Ordering",
          "Key-value pairs",
          "Insertion and removal at both ends",
        ],
        answer: "Insertion and removal at both ends",
        explanation:
          "The primary difference between Queue and Deque is that Deque is a double-ended queue, allowing insertion and removal of elements at both ends, whereas Queue only supports operations at one end. Both allow duplicates and maintain ordering, and neither uses key-value pairs.",
      },

      {
        text: "Which Java Collection sub-interface is best for multi-threaded processing?",
        options: ["List", "Set", "Queue", "Map"],
        answer: "Queue",
        explanation:
          "Queue is a Java Collection sub-interface best suited for multi-threaded processing. It is a collection that holds elements prior to processing, allowing multiple threads to access and process elements in a controlled manner. List, Set, and Map do not inherently support multi-threaded processing as their primary use case.",
      },

      {
        text: "Which Set implementation has the best performance for searching elements?",
        options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"],
        answer: "HashSet",
        explanation:
          "HashSet has the best performance for searching elements because it uses a hash table to store elements, providing constant time performance for adding, removing, and searching elements. TreeSet has a slightly lower search performance, LinkedHashSet preserves the order of elements, and ArrayList is a List implementation, and has a very low perfromance for searching elements O(N).",
      },

      {
        text: "Which Map implementation maintains keys in sorted order?",
        options: ["HashMap", "TreeMap", "LinkedHashMap", "HashSet"],
        answer: "TreeMap",
        explanation:
          "TreeMap is a Map implementation that maintains keys in sorted order according to their natural order or a provided comparator. HashMap uses a hash table and does not guarantee order, LinkedHashMap preserves the order of elements, and HashSet is a Set implementation, not a Map implementation.",
      },

      {
        text: "What is the primary advantage of using TreeSet over HashSet?",
        options: [
          "Constant time performance",
          "Preserving order of elements",
          "Sorting elements",
          "Better search performance",
        ],
        answer: "Sorting elements",
        explanation:
          "The primary advantage of using TreeSet over HashSet is sorting elements based on their natural order or a provided comparator. HashSet provides constant time performance for common operations but does not maintain any order, while TreeSet uses a red-black tree data structure that inherently sorts elements.",
      },

      {
        text: "When would you choose to use a LinkedHashMap over a HashMap?",
        options: [
          "When you need constant time performance",
          "When you need sorted keys",
          "When you need to preserve the order of elements",
          "When you need a Set implementation",
        ],
        answer: "When you need to preserve the order of elements",
        explanation:
          "You would choose to use a LinkedHashMap over a HashMap when you need to preserve the order of elements. LinkedHashMap maintains the order of key-value pairs, while HashMap provides constant time performance for common operations but does not guarantee any order. LinkedHashMap is not used for sorted keys or as a Set implementation.",
      },

      {
        text: "What is a primary disadvantage of using LinkedList over ArrayList?",
        options: [
          "Slower read by index",
          "Slower write operations",
          "Does not allow duplicates",
          "Does not maintain the order of elements",
        ],
        answer: "Slower read by index",
        explanation:
          "A primary disadvantage of using LinkedList over ArrayList is slower read by index. LinkedList uses a linked list data structure, which requires traversal to access elements by index, resulting in slower read performance. ArrayList provides faster read operations due to its dynamic array implementation. LinkedList supports duplicates and maintains the order of elements, and it has better write performance compared to ArrayList.",
      },
      {
        text: "What is the primary use case for the Queue interface?",
        options: [
          "Holding elements prior to processing",
          "Sorting elements",
          "Storing unique elements",
          "Storing key-value pairs",
        ],
        answer: "Holding elements prior to processing",
        explanation:
          "The primary use case for the Queue interface is holding elements prior to processing. It is often used for multi-threaded processing, allowing multiple threads to access and process elements in a controlled manner. Queue is not primarily used for sorting elements, storing unique elements, or storing key-value pairs.",
      },
      {
        text: "Which interface is used to define a collection that stores elements in a last-in, first-out (LIFO) order?",
        options: ["List", "Queue", "Deque", "Set"],
        answer: "Deque",
        explanation:
          "Deque is more versatile compared to Queue, as it allows insertion and removal of elements from both ends (head and tail). Queue, on the other hand, is designed for a strict FIFO order, where elements are inserted at the tail and removed from the head. This makes Queue more suitable when you only need basic FIFO functionality, while Deque provides greater flexibility, making possible both FIFO and LIFO way of accessing elements.",
      },
      {
        text: "Which Java Collection sub-interface has the best performance for checking if an element is in the collection?",
        options: ["List", "Set", "Queue", "Map"],
        answer: "Set",
        explanation:
          "Set is the Java Collection sub-interface with the best performance for checking if an element is in the collection, especially when using HashSet implementation. Sets ensure element uniqueness, which allows for more efficient search operations. List and Queue generally have lower search performance, and Map is not a sub-interface of Collection.",
      },
    ],
  },
  2: {
    title: "Topic 1. Collections",
    subtitle: "Quiz 2. Search efficiency in Set and Map",
    questions: [
      {
        text: "What object properties should be used in equal and hashCode?",
        options: ["State", "Identity", "Public", "Private"],
        answer: "Identity",
        explanation:
          "Methods equals() and hashCode() should be based only on properties which are part of identity, i.e. will never change",
      },
    ],
  },
};
