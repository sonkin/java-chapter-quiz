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
        text: "What is the efficiency of the brute force search method?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        answer: "O(n)",
        explanation:
          "The brute force search method has an efficiency of O(n), as it involves iterating over all elements in the collection",
      },
      {
        text: "What is the primary requirement for performing a search by half division?",
        options: [
          "The collection must be sorted",
          "The elements must implement the Comparable interface",
          "The collection must contain unique elements",
          "The search must be performed in a binary tree",
        ],
        answer: "The collection must be sorted",
        explanation:
          "To perform a search by half division, the collection must be sorted, which allows the algorithm to efficiently narrow down the search space",
      },
      {
        text: "What does the load factor represent in a hash table?",
        options: [
          "The number of buckets",
          "The number of elements",
          "The percentage of empty buckets",
          "The average number of elements per bucket",
        ],
        answer: "The average number of elements per bucket",
        explanation:
          "The load factor represents the average number of elements per bucket in a hash table. It is used to determine when rehashing should occur to maintain efficient searching.",
      },
      {
        text: "What is the default load factor in Java?",
        options: ["0.25", "0.5", "0.75", "1"],
        answer: "0.75",
        explanation:
          "In Java, the default load factor is 0.75. This means that on average, every bucket has less than one element stored inside it, ensuring efficient searching.",
      },
      {
        text: "Which prime numbers are commonly used as shift values when calculating a composite hash code?",
        options: ["2 and 3", "5 and 7", "11 and 13", "17 and 31"],
        answer: "17 and 31",
        explanation:
          "Prime numbers 17 and 31 are often used as shift values when calculating a composite hash code, as they help in mixing the bits of the hash codes of different properties.",
      },
      {
        text: "What should be done if a calculated hash code is too large to fit into an int?",
        options: [
          "Split the hash code into multiple parts",
          "Round the hash code to the nearest int",
          "Cast the hash code to an int",
          "Use a long instead of an int",
        ],
        answer: "Cast the hash code to an int",
        explanation:
          "If a calculated hash code is too large to fit into an int, casting it to an int will truncate the upper bits, allowing the resulting number to fit into an int.",
      },
      {
        text: "What are collisions in a HashMap?",
        options: [
          "Duplicate keys",
          "Same hash codes for different keys",
          "Memory overflow",
          "Invalid key-value pairs",
        ],
        answer: "Same hash codes for different keys",
        explanation:
          "Collisions in a hash table occur when two different keys have the same hash code, causing them to be placed in the same bucket. This situation requires additional handling to maintain the efficiency of hash table operations.",
      },
      {
        text: "What is the consequence of including state properties in the hash code calculation?",
        options: [
          "The hash code will be less unique",
          "The object may not be equal to itself if its state changes",
          "The hash code will be more efficient",
          "The object will have a higher likelihood of collisions",
        ],
        answer: "The object may not be equal to itself if its state changes",
        explanation:
          "If state properties are included in the hash code calculation, the object may not be equal to itself if its state changes, leading to difficulties in finding the object in a collection.",
      },
      {
        text: "What type of properties should not be included in equals and hashCode?",
        options: [
          "State properties",
          "Identity properties",
          "Static properties",
          "Transient properties",
        ],
        answer: "State properties",
        explanation:
          "State properties should not be included in equals() and hashCode() calculations, as their values may change over time, leading to inconsistencies and difficulties in finding the object in a collection.",
      },
      {
        text: "Which of the following is not part of the identity of the Person?",
        options: ["First name", "Last name", "Date of birth", "Position"],
        answer: "Position",
        explanation:
          "Position is not part of the identity of the Person, as it represents the state of the object and can change over time. Identity properties are those that remain constant throughout the life of an object.",
      },
      {
        text: "What happens when a hash code is cast to an int?",
        options: [
          "The hash code is rounded",
          "The upper bits are cut",
          "The lower bits are cut",
          "The hash code is split",
        ],
        answer: "The upper bits are cut",
        explanation:
          "When a hash code is cast to an int, the upper bits are cut, leaving only the lower bits. This allows the resulting number to fit into an int.",
      },
      {
        text: "What is the purpose of a prime shift number in calculating a hash code?",
        options: [
          "For mixing the bits",
          "For increasing the size of the hash code",
          "For decreasing the size of the hash code",
          "For simplifying the calculation",
        ],
        answer: "For mixing the bits",
        explanation:
          "A prime shift number, such as 17 or 31, is used for mixing the bits of the hash codes of different properties, which helps in generating a more unique and evenly distributed hash code.",
      },
      {
        text: "How is the hash code mapped to the bucket number?",
        options: [
          "By multiplying the hash code with the bucket size",
          "By dividing the hash code by the bucket size",
          "By using the remainder of the hash code divided by the bucket size",
          "By adding the hash code and the bucket size",
        ],
        answer:
          "By using the remainder of the hash code divided by the bucket size",
        explanation:
          "The hash code is mapped to the bucket number by taking the remainder when the hash code is divided by the total number of buckets. This operation ensures that the resulting bucket number is within the bounds of the hash table and helps in distributing the elements across different buckets.",
      },
      {
        text: "What is the time complexity for adding, removing, and finding elements in HashSet and LinkedHashSet?",
        options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
        answer: "O(1)",
        explanation:
          "HashSet and LinkedHashSet have a very high efficiency for adding, removing, and finding elements, with a time complexity of O(1).",
      },
      {
        text: "What data structure does TreeSet use?",
        options: ["Array", "Hash table", "Red-black tree", "Binary tree"],
        answer: "Red-black tree",
        explanation:
          "TreeSet uses a red-black tree, which is a type of binary self-balancing tree, allowing for efficient operations.",
      },
      {
        text: "What is the time complexity for operations in TreeMap?",
        options: ["O(1)", "O(log N)", "O(N)", "O(N log N)"],
        answer: "O(log N)",
        explanation:
          "TreeMap keeps keys in a binary self-balancing tree, and its time complexity for operations is O(log N).",
      },
      {
        text: "Which Java Map implementation provides efficient operations in a multithreaded environment?",
        options: ["HashMap", "LinkedHashMap", "TreeMap", "ConcurrentHashMap"],
        answer: "ConcurrentHashMap",
        explanation:
          "ConcurrentHashMap is designed to provide efficient operations in a multithreaded environment. While its time complexity may vary depending on the level of concurrency, it is generally quite efficient.",
      },
    ],
  },
  3: {
    title: "Topic 2. Multithreaded Collections",
    subtitle: "Quiz 1. Test",
    questions: [
      {
        text: "What is the efficiency of the brute force search method?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n^2)"],
        answer: "O(n)",
        explanation:
          "The brute force search method has an efficiency of O(n), as it involves iterating over all elements in the collection",
      },
    ],
  },
};
