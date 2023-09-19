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
    title: "Topic 2. Collections in Multithreaded environment",
    subtitle: "Quiz 1. ArrayList Concurrency",
    questions: [
      {
        text: "What issues may arise when working with ArrayList in a multi-threaded environment?",
        options: [
          "Lost updates",
          "ConcurrentModificationExceptions",
          "Slow performance",
          "All of the above",
        ],
        answer: "All of the above",
        explanation:
          "When working with ArrayList in a multi-threaded environment, you may experience lost updates, ConcurrentModificationExceptions, and slow performance. These issues occur because ArrayList is not thread-safe, and multiple threads may access and modify the list simultaneously, leading to data corruption, unexpected exceptions, and degraded performance.",
      },
      {
        text: "Which method can be used to create a thread-safe list?",
        options: [
          "synchronizedList()",
          "synchronizedBlock()",
          "synchronizedQueue()",
          "synchronizedArrayList()",
        ],
        answer: "synchronizedList()",
        explanation:
          "synchronizedList() is a method provided by the Collections class to create a thread-safe list. It takes an existing list as a parameter and wraps it in a synchronized wrapper, providing basic synchronization for individual operations on the list. This method helps in resolving lost update issues in a multi-threaded environment.",
      },
      {
        text: "What is the main idea behind CopyOnWriteArrayList?",
        options: [
          "Creating a copy on every update",
          "Locking the entire list",
          "Using atomic operations",
          "Using volatile variables",
        ],
        answer: "Creating a copy on every update",
        explanation:
          "The main idea behind CopyOnWriteArrayList is to create a copy of the list every time an update is made (add or remove elements). This ensures that the list remains thread-safe as iterating threads will always work on the original list, which remains unchanged during the iteration process. However, this approach can be inefficient in terms of performance, especially when there are frequent updates.",
      },
      {
        text: "What is the Lost Update issue?",
        options: [
          "Multiple threads updating the same element",
          "Missing elements in a list",
          "Overwriting data by other threads",
          "None of the above",
        ],
        answer: "Overwriting data by other threads",
        explanation:
          "The Lost Update issue occurs when two or more threads read the same data from a list and then update it simultaneously. As a result, one thread's update may overwrite the other thread's update, causing data loss. This issue is common when working with non-thread-safe data structures like ArrayList in a multi-threaded environment.",
      },
      {
        text: "Which of the following can help prevent ConcurrentModificationException?",
        options: [
          "synchronizedList()",
          "synchronized block",
          "CopyOnWriteArrayList",
          "Both synchronized block and CopyOnWriteArrayList",
        ],
        answer: "Both synchronized block and CopyOnWriteArrayList",
        explanation:
          "Both synchronized block and CopyOnWriteArrayList can help prevent ConcurrentModificationException. A synchronized block can be used to lock the list during compound operations or iterations, ensuring that no other threads can modify the list during this time. CopyOnWriteArrayList, on the other hand, creates a copy of the list every time an update is made, ensuring that iterating threads always work on the original list.",
      },
      {
        text: "What is the Lost Update issue in a multi-threaded environment?",
        options: [
          "Multiple threads reading outdated data",
          "Multiple threads attempting to update the same data simultaneously",
          "Multiple threads causing a deadlock",
          "Multiple threads causing a race condition",
        ],
        answer:
          "Multiple threads attempting to update the same data simultaneously",
        explanation:
          "The Lost Update issue occurs when multiple threads attempt to update the same data simultaneously, leading to one or more updates being overwritten by another thread's update. This can cause data inconsistency and unpredictable results, as the final state of the data might not reflect all the intended updates made by the threads.",
      },
      {
        text: "What is the main disadvantage of using CopyOnWriteArrayList?",
        options: [
          "Poor performance for reading data",
          "Poor performance for updating data",
          "Inability to prevent Lost Update issue",
          "Inability to prevent ConcurrentModificationException",
        ],
        answer: "Poor performance for updating data",
        explanation:
          "CopyOnWriteArrayList has poor performance for updating data because it creates a new copy of the list on each update. This can be inefficient and slow, especially when there are frequent updates or a large number of updating threads. However, it has high performance for reading data and can prevent both Lost Update issue and ConcurrentModificationException.",
      },
      {
        text: "Which of the following options can prevent ConcurrentModificationException?",
        options: [
          "Collections.synchronizedList()",
          "Synchronized block",
          "CopyOnWriteArrayList",
          "Both Synchronized block and CopyOnWriteArrayList",
        ],
        answer: "Both Synchronized block and CopyOnWriteArrayList",
        explanation:
          "Both synchronized block and CopyOnWriteArrayList can prevent ConcurrentModificationException. Collections.synchronizedList() provides basic synchronization for individual operations on the list but does not provide synchronization for compound operations or iterations, which can still lead to ConcurrentModificationException. Synchronized block can be used to ensure that only one thread can access the list during compound operations or iterations, preventing ConcurrentModificationException. CopyOnWriteArrayList creates a new copy of the list on each update, ensuring that updates and iterations are isolated from each other, preventing ConcurrentModificationException.",
      },
      {
        text: "Which Java collection implementation is best suited for cases with frequent reads and rare updates?",
        options: [
          "ArrayList",
          "LinkedList",
          "CopyOnWriteArrayList",
          "Collections.synchronizedList()",
        ],
        answer: "CopyOnWriteArrayList",
        explanation:
          "CopyOnWriteArrayList is best suited for cases with frequent reads and rare updates. It has high performance for reading data, as it does not require any synchronization or locking. However, it has poor performance for updating data, as it creates a new copy of the list on each update. This is not a problem when updates are rare. In contrast, ArrayList, LinkedList, and Collections.synchronizedList() do not provide the same level of performance and safety for frequent reads as CopyOnWriteArrayList. ArrayList and LinkedList are not thread-safe and can lead to data inconsistency or exceptions in multi-threaded environments, while Collections.synchronizedList() requires synchronization for every operation, which can reduce performance, especially for read-heavy workloads.",
      },
      {
        text: "Which method should you use to safely remove an element while iterating through a list?",
        options: [
          "List.remove()",
          "Iterator.remove()",
          "List.removeAll()",
          "None of the above",
        ],
        answer: "Iterator.remove()",
        explanation:
          "To safely remove an element while iterating through a list, you should use Iterator.remove(). This method is specifically designed to allow safe removal of elements during traversal without causing ConcurrentModificationException.",
      },
      {
        text: "What is the primary purpose of ConcurrentModificationException?",
        options: [
          "To improve performance",
          "To prevent data corruption",
          "To ensure thread safety",
          "To enforce coding standards",
        ],
        answer: "To prevent data corruption",
        explanation:
          "The primary purpose of ConcurrentModificationException is to prevent data corruption. It is thrown when an iterator detects that the underlying collection has been modified while it was iterating. This exception serves as a warning mechanism to indicate that the program is behaving incorrectly and may lead to unpredictable results.",
      },
      {
        text: "Why does Collections.synchronizedList() not prevent ConcurrentModificationException?",
        options: [
          "It is not designed for multi-threading",
          "It only provides basic synchronization for individual operations",
          "It doesn't support iterator operations",
          "It is only for read-heavy workloads",
        ],
        answer:
          "It only provides basic synchronization for individual operations",
        explanation:
          "Collections.synchronizedList() does not prevent ConcurrentModificationException because it only provides basic synchronization for individual operations on the list. It does not provide synchronization for compound operations or iterations, which can still result in ConcurrentModificationException when one thread is iterating over the list and another thread is modifying the list simultaneously.",
      },
      {
        text: "Which method provides the best performance when synchronizing ArrayList in a multi-threaded environment?",
        options: [
          "ArrayList",
          "Collections.synchronizedList()",
          "Synchronized block",
          "CopyOnWriteArrayList",
        ],
        answer: "Collections.synchronizedList()",
        explanation:
          "Collections.synchronizedList() provides the best performance when synchronizing ArrayList in a multi-threaded environment. It wraps the ArrayList to make it thread-safe and ensures better performance than other methods, such as synchronized blocks.",
      },
      {
        text: "When should you use a synchronized block over Collections.synchronizedList()?",
        options: [
          "When you require fine-grained control over synchronization",
          "When working with read-heavy workloads",
          "When using an iterator",
          "All of the above",
        ],
        answer: "When you require fine-grained control over synchronization",
        explanation:
          "You should use a synchronized block over Collections.synchronizedList() when you require fine-grained control over synchronization. A synchronized block allows you to explicitly control which parts of the code are synchronized, providing more flexibility and potentially better performance than a synchronized collection.",
      },

      {
        text: "How can you avoid ConcurrentModificationException while using synchronizedList()?",
        options: [
          "By using a synchronized block for compound operations or iterations",
          "By creating a copy of the list before iterating over it",
          "By using a CopyOnWriteArrayList",
          "Both a) and b)",
        ],
        answer: "Both a) and b)",
        explanation:
          "To avoid ConcurrentModificationException while using synchronizedList(), you need to either use a synchronized block for compound operations or iterations or create a copy of the list before iterating over it.",
      },

      {
        text: "Which of these approaches provides good efficiency for both reading and updating in multithreaded environment?",
        options: [
          "Collections.synchronizedList()",
          "Synchronized block",
          "CopyOnWriteArrayList",
          "ConcurrentHashMap",
        ],
        answer: "Collections.synchronizedList()",
        explanation:
          "Collections.synchronizedList() provides high efficiency for both reading and updating operations by synchronizing access for all operations. However, it requires manual synchronization to prevent ConcurrentModificationException.",
      },
    ],
  },
  4: {
    title: "Topic 2. Collections in Multithreaded environment",
    subtitle: "Quiz 2. Queues and Deques",

    questions: [
      {
        text: "Which are the two groups of operations available for all queues?",
        options: [
          "Operations that throw exceptions and operations that return special values",
          "Blocking operations and non-blocking operations",
          "Adding to the beginning and adding to the end of the queue",
          "Synchronous operations and asynchronous operations",
        ],
        answer:
          "Operations that throw exceptions and operations that return special values",
        explanation:
          "Queues provide operations that either throw exceptions (such as add and remove) or return special values (such as offer and poll) based on the success or failure of the operation.",
      },
      {
        text: "Which method can throw an IllegalStateException if the queue is overfull?",
        options: ["add", "offer", "remove", "poll"],
        answer: "add",
        explanation:
          "The add method can throw an IllegalStateException if the queue is already at its maximum capacity and cannot accommodate additional elements.",
      },
      {
        text: "What does the offer method return if the element cannot be added to the queue?",
        options: ["true", "false", "null", "IllegalArgumentException"],
        answer: "false",
        explanation:
          "The offer method returns false if the element cannot be added to the queue, typically due to the queue being full.",
      },
      {
        text: "Which method allows retrieving the next element from the queue without removing it?",
        options: ["add", "remove", "element", "peek"],
        answer: "peek",
        explanation:
          "The peek method allows retrieving the next element from the queue without removing it. It is useful for inspecting the element that will be next in line for removal.",
      },
      {
        text: "Which interface is used for producer/consumer threads interaction?",
        options: [
          "BlockingQueue",
          "Deque",
          "PriorityQueue",
          "SynchronousQueue",
        ],
        answer: "BlockingQueue",
        explanation:
          "The BlockingQueue interface extends the Queue interface and provides additional methods for blocking operations, making it suitable for thread synchronization and communication.",
      },
      {
        text: "Which implementation of BlockingQueue is always bounded?",
        options: [
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "PriorityBlockingQueue",
          "SynchronousQueue",
        ],
        answer: "ArrayBlockingQueue",
        explanation:
          "The ArrayBlockingQueue implementation of BlockingQueue is based on an array with a fixed capacity. It blocks the calling thread if the queue is full until space becomes available for adding elements.",
      },
      {
        text: "Which data structure is internally used by PriorityQueue to retrieve the element with maximal priority?",
        options: ["Array", "Linked List", "Binary Heap", "Red-Black Tree"],
        answer: "Binary Heap",
        explanation:
          "PriorityQueue internally uses a binary heap data structure to maintain the order of elements. It is implemented as a dynamically resizable array-based heap structure, where elements are added or removed while preserving the heap property.",
      },
      {
        text: "Which method is used to insert an element into a BlockingQueue, and blocks the calling thread until space becomes available?",
        options: ["put", "offer", "add", "enqueue"],
        answer: "put",
        explanation:
          "The put method is used to insert an element into a BlockingQueue. If the queue is already full, it blocks the calling thread until space becomes available to accommodate the new element.",
      },
      {
        text: "Which operation of PriorityQueue allows retrieving the element with the highest priority without removing it?",
        options: ["add", "remove", "element", "peek"],
        answer: "peek",
        explanation:
          "The peek method of PriorityQueue allows retrieving the element with the highest priority without removing it from the queue.",
      },
      {
        text: "Which operations of PriorityQueue require elements to implement the Comparable interface or provide a custom Comparator?",
        options: ["add", "remove", "element", "all of the above"],
        answer: "all of the above",
        explanation:
          "All operations of PriorityQueue, including add, remove, and element, require elements to implement the Comparable interface or provide a custom Comparator. This is necessary to establish the priority order of elements in the queue.",
      },
      {
        text: "Which subinterface of Queue allows adding and removing elements from both ends, making it a double-ended queue?",
        options: [
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "PriorityQueue",
          "Deque",
        ],
        answer: "Deque",
        explanation:
          "The Deque (double-ended queue) implementation of Queue allows adding and removing elements from both ends. It provides flexibility in queue operations by supporting operations at the front and back of the queue.",
      },
      {
        text: "Which implementation of a queue uses non-blocking algorithms for thread safety?",
        options: [
          "ConcurrentLinkedQueue",
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "PriorityQueue",
        ],
        answer: "ConcurrentLinkedQueue",
        explanation:
          "The ConcurrentLinkedQueue implementation of a queue is specifically designed for multi-threaded environments. It utilizes non-blocking algorithms and provides thread-safe operations, allowing concurrent access and modification by multiple threads.",
      },
      {
        text: "Which implementation of a queue is based on a circular array and automatically expands when the capacity is reached?",
        options: [
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "SynchronousQueue",
          "ArrayDeque",
        ],
        answer: "ArrayDeque",
        explanation:
          "The ArrayDeque implementation of a queue is based on a circular array. It automatically expands the underlying array when the capacity is reached, allowing the queue to accommodate more elements efficiently.",
      },
      {
        text: "Which implementation of a queue provides direct element handoff between threads and has a higher performance than SynchronousQueue?",
        options: [
          "TransferQueue",
          "DirectQueue",
          "LinkedBlockingQueue",
          "ConcurrentLinkedQueue",
        ],
        answer: "TransferQueue",
        explanation:
          "The TransferQueue implementation of a queue provides direct element handoff between threads. It offers higher performance compared to SynchronousQueue in scenarios where threads need to transfer elements without blocking.",
      },
      {
        text: "Which implementation of a queue is commonly used for task and event handling, as well as caching scenarios, but does not support blocking methods?",
        options: [
          "ConcurrentLinkedQueue",
          "SynchronousQueue",
          "DelayQueue",
          "ArrayBlockingQueue",
        ],
        answer: "ConcurrentLinkedQueue",
        explanation:
          "The ConcurrentLinkedQueue implementation of a queue is commonly used for task and event handling, as well as caching scenarios. It supports concurrent access and modification by multiple threads but does not provide blocking methods.",
      },
      {
        text: "Which implementation of a queue is based on a circular array?",
        options: [
          "LinkedBlockingQueue",
          "ConcurrentLinkedQueue",
          "ArrayDeque",
          "PriorityQueue",
        ],
        answer: "ArrayDeque",
        explanation:
          "The ArrayDeque implementation of a queue is based on a circular array. It allows adding and removing elements from both ends efficiently, making it suitable for double-ended queue operations.",
      },
      {
        text: "Which implementation of a queue requires elements to implement the Comparable interface or provide a custom Comparator for ordering?",
        options: [
          "SynchronousQueue",
          "PriorityBlockingQueue",
          "ConcurrentLinkedQueue",
          "LinkedBlockingQueue",
        ],
        answer: "PriorityBlockingQueue",
        explanation:
          "The PriorityBlockingQueue implementation of a queue requires elements to implement the Comparable interface or provide a custom Comparator for ordering. This allows elements to be arranged based on their priority.",
      },
      {
        text: "Which implementation of a queue is recommended for high-concurrency scenarios when thread safety is required?",
        options: [
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "ConcurrentLinkedQueue",
          "SynchronousQueue",
        ],
        answer: "ConcurrentLinkedQueue",
        explanation:
          "The ConcurrentLinkedQueue implementation of a queue is recommended for high-concurrency scenarios where thread safety is required. It provides efficient and thread-safe operations for concurrent access and modification.",
      },
      {
        text: "Which bounded implementation of a queue is recommended when low to moderate contention is expected in a multi-threaded environment?",
        options: [
          "ArrayBlockingQueue",
          "LinkedBlockingQueue",
          "ConcurrentLinkedQueue",
          "SynchronousQueue",
        ],
        answer: "ArrayBlockingQueue",
        explanation:
          "The ArrayBlockingQueue implementation of a queue is recommended when low to moderate contention is expected in a multi-threaded environment. It provides thread-safe operations with blocking functionality.",
      },
      {
        text: "What happens when the capacity of an ArrayDeque is exceeded?",
        options: [
          "The program will terminate with an exception",
          "It will automatically expand, creating a larger circular array",
          "It will delete the oldest elements to make room for new ones",
          "It will refuse to add more elements",
        ],
        answer:
          "It will automatically expand, creating a larger circular array",
        explanation:
          "When the capacity of an ArrayDeque is exceeded, it will automatically expand by creating a larger circular array. This allows the deque to accommodate additional elements without losing existing elements.",
      },
      {
        text: "What does the tryTransfer method do in a TransferQueue?",
        options: [
          "It waits indefinitely until the transfer is successful",
          "It transfers an element immediately and returns true if a consumer is waiting for the element",
          "It transfers an element immediately regardless of whether a consumer is waiting or not",
          "It automatically creates a new thread to handle the transfer",
        ],
        answer:
          "It transfers an element immediately and returns true if a consumer is waiting for the element",
        explanation:
          "The tryTransfer method in a TransferQueue transfers an element immediately if a consumer thread is waiting for the element. It returns true to indicate a successful transfer, and false if no consumer is currently waiting.",
      },
      {
        text: "Which blocking Queue is recommended for high contention scenarios (i.e., when there are many threads accessing the queue)?",
        options: [
          "ArrayBlockingQueue",
          "ConcurrentLinkedQueue",
          "LinkedList",
          "LinkedBlockingQueue",
        ],
        answer: "LinkedBlockingQueue",
        explanation:
          "The LinkedBlockingQueue implementation of a queue is recommended for high contention scenarios. It provides good performance and scalability when multiple threads are concurrently accessing the queue.",
      },
      {
        text: "What is the time complexity for most queue operations in Java?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n^2)"],
        answer: "O(1)",
        explanation:
          "Most queue operations in Java have a time complexity of O(1), which means they can be performed in constant time regardless of the size of the queue. This makes queue operations efficient and suitable for various applications.",
      },
      {
        text: "What happens when an element is transferred using the TransferQueue's transfer method?",
        options: [
          "The element is immediately sent to the receiving thread",
          "The method is blocked until the receiving thread acknowledges receipt",
          "The method is blocked until there is space in the queue",
          "The method is blocked until the queue is empty",
        ],
        answer:
          "The method is blocked until the receiving thread acknowledges receipt",
        explanation:
          "When an element is transferred using the transfer method of TransferQueue, the method is blocked until the receiving thread acknowledges the receipt of the transferred element. This ensures synchronization between the transferring and receiving threads.",
      },
      {
        text: "Which Queue implementation should be used when thread safety is needed, but blocking functionality is not?",
        options: [
          "LinkedList",
          "PriorityBlockingQueue",
          "ConcurrentLinkedQueue",
          "ArrayDeque",
        ],
        answer: "ConcurrentLinkedQueue",
        explanation:
          "The ConcurrentLinkedQueue implementation of a queue should be used when thread safety is needed but blocking functionality is not required. It provides thread-safe operations for concurrent access without blocking.",
      },
      {
        text: "In a circular array implementation of ArrayDeque, what happens when you try to add an element beyond its current capacity?",
        options: [
          "An exception is thrown",
          "It loops back to the beginning of the array",
          "The array size is doubled",
          "The oldest element is removed",
        ],
        answer: "The array size is doubled",
        explanation:
          "In a circular array implementation of ArrayDeque, when you try to add an element beyond its current capacity, the array size is doubled. This dynamic resizing allows the deque to accommodate more elements efficiently.",
      },
      {
        text: "What is the benefit of using a heap instead of a binary tree for implementing PriorityQueue in Java?",
        options: [
          "Efficient element insertion and removal based on priority.",
          "Memory efficiency and compact storage.",
          "Maintaining the order of elements based on the first-in-first-out (FIFO) policy.",
          "All of the above.",
        ],
        answer: "Memory efficiency and compact storage.",
        explanation:
          "The benefit of using a heap instead of a binary tree for implementing PriorityQueue in Java is memory efficiency and compact storage. A heap-based implementation allows efficient insertion and removal of elements based on priority while maintaining a balanced heap structure.",
      },
      {
        text: "What advantage does a circular array offer over a regular array for implementing ArrayDeque?",
        options: [
          "Faster element access due to a contiguous memory layout.",
          "Improved time efficiency for insertions and removals at both ends.",
          "Dynamic resizing of the underlying array.",
          "Blocking methods support.",
        ],
        answer:
          "Improved time efficiency for insertions and removals at both ends.",
        explanation:
          "A circular array offers improved time efficiency for insertions and removals at both ends compared to a regular array. It eliminates the need for shifting elements during insertion and removal, resulting in faster operations.",
      },
      {
        text: "How does a circular array optimize memory usage for ArrayDeque?",
        options: [
          "It enables dynamic resizing of the underlying array.",
          "It allows for a contiguous memory layout.",
          "It reduce the need for storing empty gaps between elements.",
          "It supports efficient random access to elements.",
        ],
        answer: "It reduce the need for storing empty gaps between elements.",
        explanation:
          "A circular array optimizes memory usage for ArrayDeque by eliminating the need for storing empty gaps between elements. The circular structure allows elements to be stored contiguously, reducing memory wastage.",
      },
      {
        text: "What is the time complexity for insertions and removals at both ends of an ArrayDeque implemented using a circular array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        answer: "O(1)",
        explanation:
          "Insertions and removals at both ends of an ArrayDeque implemented using a circular array have a time complexity of O(1), which means they can be performed in constant time. This makes ArrayDeque efficient for double-ended queue operations.",
      },
    ],
  },
  5: {
    title: "Topic 3. Asynchronous programming",
    subtitle: "Quiz 1. Asynchronous programming and CompletableFuture basics",
    questions: [
      {
        text: "What is the major feature of asynchronous programming?",
        options: [
          "Simultaneous execution of multiple tasks.",
          "Possibility to execute one task after another in a sequence.",
          "Possibility to run tasks independently in a non-blocking manner.",
          "Possibility to split a task into smaller units for rapid execution.",
        ],
        answer:
          "Possibility to run tasks independently in a non-blocking manner.",
        explanation:
          "Asynchronous programming is characterized by its ability to run tasks independently and in a non-blocking manner. This means that the execution of certain tasks does not need to wait for the completion of others, and they can run concurrently. This is especially useful in scenarios where certain tasks may take an extended time to complete (such as network requests or file operations). This way, the program can continue executing other tasks instead of waiting, thereby optimizing the utilization of resources and improving the overall efficiency of the program. The independent and concurrent nature of tasks in asynchronous programming sets it apart from synchronous programming, where tasks are executed in a sequence, one after another.",
      },
      {
        text: "Which type of I/O operation is typically associated with blocking technologies like JDBC?",
        options: [
          "Non-blocking I/O",
          "Synchronous I/O",
          "Asynchronous I/O",
          "Reactive I/O",
        ],
        answer: "Synchronous I/O",
        explanation:
          "Blocking technologies like JDBC often rely on synchronous I/O operations. In synchronous I/O, the thread executing the operation is blocked and waits for the operation to complete before proceeding to the next line of code, leading to potential inefficiencies and resource underutilization.",
      },
      {
        text: "What are some of the issues commonly associated with blocking technologies like JDBC?",
        options: [
          "Incomplete and outdated API",
          "Increased risk of deadlocks and livelocks",
          "Inadequate error handling",
          "Scalability challenges",
        ],
        answer: "Scalability challenges",
        explanation:
          "Blocking technologies like JDBC can face scalability challenges. The allocation of dedicated threads for each connection or request can limit the system's scalability, especially in high-concurrency scenarios. This can result in slower response times, increased latency, and difficulties in efficiently handling a growing number of connections or requests.",
      },
      {
        text: "What is the benefit of using non-blocking or asynchronous alternatives to blocking technologies?",
        options: [
          "Quick response times",
          "Simplified error handling",
          "Simpler programming model",
          "Reduced risk of deadlock",
        ],
        answer: "Quick response times",
        explanation:
          "Non-blocking or asynchronous alternatives to blocking technologies offer benefits such as quick response times. Users expect fast and smooth interactions in today's digital world, making responsiveness a critical aspect of any application.",
      },
      {
        text: "In the metaphor of organization, how can the efficiency of management be improved?",
        options: [
          "The chief should control all the tasks.",
          "Employees should pass the results of the task to the next employee in the workflow",
          "Employees should work on the tasks together",
          "Organization should have more managers for more efficient management",
        ],
        answer:
          "Employees should pass the results of the task to the next employee in the workflow",
        explanation:
          "Management efficiency can be improved by defining a pipeline of task processing. In this process, an employee, after finishing their task, will pass the result not to the chief (main thread) but to another employee. This way, multiple tasks can be executed in parallel, enhancing the organization’s overall efficiency. This corresponds to how asynchronous programming can improve efficiency in a program.",
      },
      {
        text: "In the metaphor of the organization, what does the scenario of 'chief waiting for John to finish the task while Mike is resting' illustrate?",
        options: [
          "The benefits of multitasking",
          "The underutilization of resources",
          "The importance of the chief's role in task delegation",
          "The necessity for frequent synchronization",
        ],
        answer: "The underutilization of resources",
        explanation:
          "In this scenario, the chief (main thread) waits for John (another thread) to finish the task before delegating a new task. Meanwhile, Mike (yet another thread) is idle, waiting for work. This is a clear demonstration of the underutilization of resources, where one thread is idle and could have been used to carry out additional tasks to increase efficiency.",
      },
      {
        text: "What the metaphor of the mother and daughter vs. a single man washing clothes does NOT illustrate?",
        options: [
          "The inefficiency of frequent synchronization",
          "The importance of having multiple threads for high efficiency",
          "The benefits of independent work",
          "Importance of having the work completion notification",
        ],
        answer: "The importance of having multiple threads for high efficiency",
        explanation:
          "The metaphor doesn't necessarily imply that multiple threads are more efficient than a single one, especially when considering the overhead of coordination and synchronization between threads. The mother and daughter must regularly coordinate their tasks, which introduces interruptions and delays to their workflow, hence reducing their efficiency. The man, on the other hand, doesn't need to synchronize with anyone. He can work on his own and simply wait for the notification (the end of the washing cycle) to move on to the next task. This is a more efficient workflow as there are no unnecessary interruptions.",
      },
      {
        text: "How might an asynchronous approach improve the efficiency of a coffee machine system in a busy office?",
        options: [
          "By creating fixed time slots for employees to get coffee.",
          "By allowing users to wait in a physical queue, ensuring fairness.",
          "By notifing employees when the coffee machine becomes available, eliminating waiting time.",
          "By increasing the number of coffee machines in the office.",
        ],
        answer:
          "By notifing employees when the coffee machine becomes available, eliminating waiting time.",
        explanation:
          "An asynchronous system in this context would involve a notification system where, once a coffee machine is available, a notification is sent to employees. Employees can choose to respond to the notification if they are free or ignore it if they are currently busy, allowing the system to optimize the use of the coffee machine.",
      },
      {
        text: "What potential problem might occur with the implementation of a fixed time slot system for a coffee machine used in an office?",
        options: [
          "Employees might feel pressured to make their coffee in the allotted time.",
          "The coffee machine could be underutilized if making coffee takes less than the allocated time.",
          "The schedule could be shifted if coffee preparation takes longer than expected.",
          "All of the above",
        ],
        answer: "All of the above",
        explanation:
          "All these issues could occur in a fixed time slot system, as it doesn't account for variability in coffee preparation time and doesn't allow for flexibility based on employee availability or workload.",
      },
      {
        text: "What analogy doesn't illustrate asynchronous programming?",
        options: [
          "Pipeline",
          "Banking transaction",
          "Workflow",
          "Business process",
        ],
        answer: "Banking transaction",
        explanation:
          "Banking transactions typically follow a sequential and synchronous process. When you perform a banking transaction, such as withdrawing money from an ATM or transferring funds between accounts, the system waits for each transaction to complete before moving on to the next one. In asynchronous programming, on the other hand, tasks can be executed independently and concurrently without waiting for each task to finish before moving on to the next one. It allows for parallel execution of tasks, where each task operates independently and doesn't block the execution of other tasks. Asynchronous programming is often used in scenarios where tasks can be executed simultaneously, such as in pipelines, workflows, and business processes, but it doesn't align with the sequential and synchronous nature of banking transactions.",
      },
      {
        text: "How are blocking I/O operations handled in a traditional multithread server like Tomcat?",
        options: [
          "By using a single thread for all connections.",
          "By assigning a separate thread for each connection.",
          "By employing asynchronous I/O operations.",
          "By creating a new process for each connection.",
        ],
        answer: "By assigning a separate thread for each connection.",
        explanation:
          "In a traditional multithread server like Tomcat, a thread pool is used to handle blocking I/O operations. When a new connection is established, a free thread from the pool is assigned to handle that connection. This allows for better scalability and resource management compared to creating a new thread for each connection.",
      },
      {
        text: "What is a context switch overhead?",
        options: [
          "The time required to perform arithmetic operations.",
          "The cost of switching between threads.",
          "The delay in I/O operations due to blocking.",
          "The time taken to allocate memory for a new process.",
        ],
        answer: "The cost of switching between threads.",
        explanation:
          "Context switch overhead refers to the time or cost incurred when switching the execution context from one thread or process to another. It involves saving the current execution state, loading the new execution state, and updating memory management if necessary.",
      },
      {
        text: "Which of the following is NOT a way to reduce context switch overhead?",
        options: [
          "Using non-blocking Input/Output.",
          "Asynchronous programming.",
          "Creating as many threads as CPU cores.",
          "Increasing the number of threads.",
        ],
        answer: "Increasing the number of threads.",
        explanation:
          "Increasing the number of threads will not reduce context switch overhead. On the contrary, a big number of threads can lead to higher overhead and negatively impact system performance.",
      },
      {
        text: "What is NOT the disadvantage of the Future interface?",
        options: [
          "No way to compose multiple asynchronous operations",
          "Lack of exception handling",
          "Blocking nature of the get() method",
          "No way to know if the asynchronous operation completed",
        ],
        answer: "No way to know if the asynchronous operation completed",
        explanation:
          "The Future interface lacks composition capabilities, has a blocking get() method, and doesn’t have support for error handling. These limitations have led to the development of alternative abstractions, such as CompletableFuture, which provide more advanced features for handling asynchronous computations.",
      },
      {
        text: "What is a primary use case for CompletableFuture.supplyAsync?",
        options: [
          "Get value from the Supplier and start sequential execution of tasks",
          "Get value from the Supplier and start an asynchronous pipeline of tasks.",
          "Managing and streamlining exception handling within asynchronous workflows.",
          "Cancelling asynchronous operations.",
        ],
        answer:
          "Get value from the Supplier and start an asynchronous pipeline of tasks.",
        explanation:
          "A primary use case for CompletableFuture.supplyAsync is to start an asynchronous pipeline of tasks. By using this method, tasks can be scheduled to run asynchronously, potentially leveraging multiple threads or processors for improved performance and concurrency. It allows for efficient parallelization of independent computations and can be beneficial in scenarios where tasks can be executed concurrently to achieve faster results.",
      },
      {
        text: "What does the thenApply method do?",
        options: [
          "Executes a task asynchronously.",
          "Performs a transformation of the result of a previous computation in the same thread.",
          "Performs a transformation of the result of a previous computation in the new thread.",
          "Applies the function and blocks until it will be completed.",
        ],
        answer:
          "Performs a transformation of the result of a previous computation in the same thread.",
        explanation:
          "The thenApply method is used to chain and apply a function to the result of a previous computation, producing a new CompletableFuture with a transformed result.",
      },
      {
        text: "What type of values does thenApply method take as an argument?",
        options: ["Consumer", "Supplier", "Function", "Predicate"],
        answer: "Function",
        explanation:
          "The thenApply method takes a Function as its argument. The Function represents a function that takes the result of the previous computation and produces a new result.",
      },
      {
        text: "What is the difference between thenApply and thenApplyAsync?",
        options: [
          "thenApply executes the function in the same thread as the previous function in the pipeline, while thenApplyAsync executes it in a new thread.",
          "thenApply executes the function in a new thread, while thenApplyAsync executes it in the same thread as the previous function in the pipeline.",
          "thenApplyAsync allows for parallel execution, while thenApply does not.",
          "thenApplyAsync executes the function synchronously, while thenApply executes it asynchronously.",
        ],
        answer:
          "thenApply executes the function in the same thread as the previous function in the pipeline, while thenApplyAsync executes it in a new thread.",
        explanation:
          "The main difference between thenApply and thenApplyAsync lies in their execution behavior. thenApply executes the function in the same thread, whereas thenApplyAsync executes it asynchronously.",
      },
      {
        text: "How might you use CompletableFuture to handle hotel and flight bookings when working on a travel booking application?",
        options: [
          "Sequentially run findFlight and findHotel, then combine the results.",
          "Run findFlight and findHotel concurrently, then sequentially process the results.",
          "Run findFlight and findHotel concurrently, then combine the results.",
          "Sequentially run findFlight and findHotel, then process the results separately.",
        ],
        answer:
          "Run findFlight and findHotel concurrently, then combine the results.",
        explanation:
          "In a travel booking application scenario, finding a flight and finding a hotel are independent tasks. By using CompletableFuture, these tasks can be run concurrently, and the results can be combined to form a complete travel plan once both tasks are completed.",
      },
      {
        text: "What is the purpose of thenCompose method?",
        options: [
          "It performs a computation asynchronously.",
          "It combines the results of two CompletableFuture instances.",
          "It chains multiple CompletableFuture instances together.",
          "It cancels a CompletableFuture computation and switch to the next one.",
        ],
        answer: "It chains multiple CompletableFuture instances together.",
        explanation:
          "The thenCompose method is used to chain multiple CompletableFuture instances together, where the output of one CompletableFuture becomes the input for the next computation.",
      },
      {
        text: "In what cases should thenCompose method be used?",
        options: [
          "When performing a computation synchronously.",
          "When combining the results of two independent CompletableFuture instances.",
          "When we need to pass the result of the asynchronous workflow to another workflow.",
          "When canceling a CompletableFuture computation.",
        ],
        answer:
          "When we need to pass the result of the asynchronous workflow to another workflow.",
        explanation:
          "The thenCompose method should be used when you have a dependency between multiple asynchronous computations and need to chain them together in a sequential manner. It allows you to express complex workflows and dependencies by providing a clear and concise way to handle dependent asynchronous operations.",
      },
      {
        text: "What does the anyOf method do?",
        options: [
          "Waits for the completion of multiple CompletableFuture instances and returns the combined result.",
          "Waits for the completion of multiple CompletableFuture instances and returns the result of the first completed future.",
          "Combines the results of multiple CompletableFuture instances into a single CompletableFuture.",
          "Cancels the execution of multiple CompletableFuture instances.",
        ],
        answer:
          "Waits for the completion of multiple CompletableFuture instances and returns the result of the first completed future.",
        explanation:
          "The anyOf method waits for the completion of multiple CompletableFuture instances and returns the result of the first completed future among them.",
      },
      {
        text: "Which of the following scenarios would benefit most from the use of 'anyOf' function?",
        options: [
          "When you need to execute all algorithms and gather all results.",
          "When there's only one source to obtain a result.",
          "When it doesn't matter which source provides the result as long as it is obtained quickly.",
          "When the sequence in which algorithms are executed is important.",
        ],
        answer:
          "When it doesn't matter which source provides the result as long as it is obtained quickly.",
        explanation:
          "The 'anyOf' function is used when there are multiple ways to get a result and the goal is to get the result as quickly as possible. 'anyOf' returns the result of the fastest algorithm or source, making it suitable for situations where speed is crucial and the source of the result is not of primary importance.",
      },
      {
        text: "What is the primary benefit of using 'anyOf' function when working with multiple algorithms or servers?",
        options: [
          "It increases the reliability of the result by using multiple sources.",
          "It provides a system for handling server downtime.",
          "It minimizes waiting time.",
          "It ensures that all algorithms or servers are used equally.",
        ],
        answer: "It minimizes waiting time.",
        explanation:
          "The main benefit of the 'anyOf' function is that it allows for the swift acquisition of results. It does this by running algorithms or requests in parallel and using the result from the source that completes first. This minimizes waiting time, especially in cases where some sources may be significantly slower than others.",
      },
      {
        text: "What type of values does the anyOf method accept as arguments?",
        options: [
          "An array of Supplier instances.",
          "An array of Runnable instances.",
          "An array of CompletableFuture instances.",
          "An array of Callable instances.",
        ],
        answer: "An array of CompletableFuture instances.",
        explanation:
          "The anyOf method accepts an array of CompletableFuture instances as its arguments. It can accept any number of CompletableFuture instances.",
      },
      {
        text: "What does the applyToEither method do?",
        options: [
          "Waits for the completion of multiple CompletableFuture instances and returns the result of the first completed future.",
          "Applies a transformation function to the result of the first completed CompletableFuture.",
          "Combines the results of multiple CompletableFuture instances into a single CompletableFuture.",
          "Cancels the execution of multiple CompletableFuture instances.",
        ],
        answer:
          "Applies a transformation function to the result of the first completed CompletableFuture.",
        explanation:
          "The applyToEither method is used to apply a function to the result of the first completed CompletableFuture among the provided futures.",
      },
    ],
  },
  6: {
    title: "Topic 3. CompletableFuture",
    subtitle: "Quiz 2. CompletableFuture advanced topics",
    questions: [
      {
        text: "How is the exceptionally method in CompletableFuture different from the catch block?",
        options: [
          "It is built into the pipeline",
          "It does not handle exceptions",
          "It is not built into the pipeline",
          "None of the above",
        ],
        answer: "It is built into the pipeline",
        explanation:
          "The exceptionally method is built into the CompletableFuture pipeline and is designed to handle any exceptions that occur in previous stages of the pipeline. Unlike a traditional catch block, it can recover the pipeline flow.",
      },
      {
        text: "What happens when an exception occurs in the pipeline before the 'exceptionally' callback?",
        options: [
          "The pipeline continues to execute",
          "The pipeline stops executing and jumps to the exceptional callback",
          "The pipeline executes only half of the tasks",
          "The pipeline deletes all the tasks",
        ],
        answer:
          "The pipeline stops executing and jumps to the exceptional callback",
        explanation:
          "If an exception occurs in the pipeline before the 'exceptionally' method, the execution of the pipeline is halted and control is transferred to the exceptionally callback.",
      },
      {
        text: "How does the handle method in CompletableFuture work?",
        options: [
          "It handles exceptions only",
          "It executes only when there is no exception",
          "It executes in both cases, whether there is an exception or not",
          "It cannot handle exceptions",
        ],
        answer:
          "It executes in both cases, whether there is an exception or not",
        explanation:
          "The handle method is called whether or not an exception occurs. It takes two parameters: the result of the computation and the exception thrown. If the computation was successful, the exception parameter is null.",
      },
      {
        text: "Can a task be interrupted in CompletableFuture?",
        options: [
          "Yes, always",
          "No, never",
          "Only if the task hasn't yet executed",
          "Only if it is running with a custom executor",
        ],
        answer: "Only if the task hasn't yet executed",
        explanation:
          "In CompletableFuture, if a task has started execution it cannot be interrupted. Only tasks that haven't started execution can be cancelled.",
      },
      {
        text: "Which thread pool does CompletableFuture use by default?",
        options: [
          "Fixed thread pool",
          "Cached thread pool",
          "Fork-join pool",
          "Single thread executor",
        ],
        answer: "Fork-join pool",
        explanation:
          "By default, CompletableFuture uses the ForkJoinPool.commonPool() as its asynchronous execution facility.",
      },
      {
        text: "Can you provide a custom executor when using CompletableFuture?",
        options: [
          "Yes",
          "No",
          "Only in specific cases",
          "Only when using Spring",
        ],
        answer: "Yes",
        explanation:
          "Yes, CompletableFuture provides overloaded methods that accept an Executor, allowing you to provide a custom Executor.",
      },
      {
        text: "When should CompletableFuture be used over messaging?",
        options: [
          "When you need distributed communication",
          "When you need to parallelize tasks within a single JVM",
          "When you have a very complicated system",
          "When you need to communicate over TCP/IP",
        ],
        answer: "When you need to parallelize tasks within a single JVM",
        explanation:
          "CompletableFuture is ideal for asynchronous programming and parallelizing tasks within a single JVM. Messaging systems are better for inter-process communication or distributed communication.",
      },
      {
        text: "What does CompletableFuture not provide that messaging does?",
        options: [
          "Scalability",
          "Asynchronous computation",
          "Retry features",
          "Parallel processing",
        ],
        answer: "Retry features",
        explanation:
          "CompletableFuture does not inherently provide retry features. Messaging systems, on the other hand, often provide robust features for message delivery, including retries.",
      },
      {
        text: "What does the @EnableAsync annotation do in Spring?",
        options: [
          "Enables support for asynchronous methods",
          "Enables parallel execution of methods",
          "Enables custom thread pool",
          "Enables CompletableFuture",
        ],
        answer: "Enables support for asynchronous methods",
        explanation:
          "The @EnableAsync annotation in Spring enables the processing of @Async annotations, which indicate that a method should be run asynchronously, potentially on a separate thread.",
      },
      {
        text: "What is the return type of an @Async method in Spring?",
        options: ["AsyncFuture", "CompletableFuture", "Future", "Optional"],
        answer: "CompletableFuture",
        explanation:
          "For a Spring @Async method, the return type can be CompletableFuture. It enables the caller of the method to continue with other work or wait for the computation to complete.",
      },
      {
        text: "How does Spring manage CompletableFuture?",
        options: [
          "By using a built-in Task Executor",
          "By using a custom thread pool",
          "By manually managing threads",
          "By ignoring thread management",
        ],
        answer: "By using a built-in Task Executor",
        explanation:
          "Spring manages CompletableFuture through its TaskExecutor abstraction, which is backed by a built-in ExecutorService (thread pool).",
      },
      {
        text: "What's the difference between CompletableFuture and messaging in terms of scalability?",
        options: [
          "Messaging scales up in the cluster, CompletableFuture scales up within a single JVM",
          "CompletableFuture scales up in the cluster, Messaging scales up within a single JVM",
          "Both scale up within a single JVM",
          "Both scale up in the cluster",
        ],
        answer:
          "Messaging scales up in the cluster, CompletableFuture scales up within a single JVM",
        explanation:
          "Messaging is often used for communication between different nodes in a distributed system, so it can scale up across a cluster of machines. CompletableFuture, however, is for executing tasks asynchronously and in parallel on a single JVM, so it scales up within a single machine.",
      },
      {
        text: "Why might you use CompletableFuture rather than messaging?",
        options: [
          "You need to distribute tasks across many computers",
          "You need to ensure high reliability in network communication",
          "You want to parallelize tasks within a single JVM",
          "You need to communicate across multiple JVMs or different programming languages",
        ],
        answer: "You want to parallelize tasks within a single JVM",
        explanation:
          "CompletableFuture allows you to perform tasks asynchronously and in parallel within a single JVM, taking advantage of multi-core processors for increased performance.",
      },
      {
        text: "How is the task executor service defined in a Spring application?",
        options: [
          "As an annotation",
          "As a bean",
          "As a CompletableFuture",
          "As a Future object",
        ],
        answer: "As a bean",
        explanation:
          "In a Spring application, the TaskExecutor service is typically defined as a bean in the application context.",
      },
      {
        text: "Why is it important for messaging to provide a way for reliability?",
        options: [
          "Because network communication is inherently unreliable",
          "Because it works on a single JVM",
          "Because messaging is complicated in setup",
          "Because messaging cannot parallelize data processing",
        ],
        answer: "Because network communication is inherently unreliable",
        explanation:
          "Messaging provides features like retries and acknowledgments to ensure reliable delivery of messages. This is important as network communication can be unreliable due to various reasons such as network failures, system crashes, etc.",
      },
      {
        text: "What is the significant benefit of CompletableFuture in terms of scalability?",
        options: [
          "It allows scaling up within a single JVM to utilize all processor cores",
          "It allows scaling up across different machines in a cluster",
          "It doesn't provide any scalability benefits",
          "It allows scaling up across different programming languages",
        ],
        answer:
          "It allows scaling up within a single JVM to utilize all processor cores",
        explanation:
          "CompletableFuture is a tool for making programs that use many processor cores more easily. It allows to parallelize and run tasks asynchronously within a single JVM, thus utilizing all processor cores.",
      },
      {
        text: "What is the disadvantage of using messaging compared to CompletableFuture?",
        options: [
          "It does not allow asynchronous computation",
          "It can introduce longer latency due to network communication overhead",
          "It cannot parallelize processing and combine data",
          "It cannot work in a distributed system",
        ],
        answer:
          "It can introduce longer latency due to network communication overhead",
        explanation:
          "Messaging involves communication over a network which can introduce latency due to network overhead. Also, the reliability features like retries, acknowledgments etc., can increase the latency.",
      },
    ],
  },
  7: {
    title: "Topic 4. Microservice Data Management",
    subtitle: "Quiz 1. SAGA",
    questions: [
      {
        text: "What is the main purpose of the SAGA pattern in microservices data management?",
        options: [
          "It is used for splitting the monolith into parts",
          "It is used for implementing distributed transactions",
          "It is used for decreasing the complexity of the system",
          "It is used for improving system performance",
        ],
        answer: "It is used for implementing distributed transactions",
        explanation:
          "The SAGA pattern is useful in a microservices architecture for implementing distributed transactions where it provides a mechanism to manage data consistency across services with the ability to commit and rollback changes.",
      },
      {
        text: "How does a two-phase commit protocol handle transactions?",
        options: [
          "It executes all transactions simultaneously",
          "It executes one transaction at a time",
          "It prepares all transactions before committing them",
          "It executes transactions randomly",
        ],
        answer: "It prepares all transactions before committing them",
        explanation:
          "In a two-phase commit protocol, a mediator (transaction dispatcher) controls the transactions. It ensures all transactions are prepared (every lock is assigned and everything is ready for the commit) before they are committed.",
      },
      {
        text: "Which Java API supports the two-phase commit approach?",
        options: [
          "Java Persistence API (JPA)",
          "Java Transaction API (JTA)",
          "Java Database Connectivity (JDBC)",
          "Java API for JSON Processing (JSON-P)",
        ],
        answer: "Java Transaction API (JTA)",
        explanation:
          "Java Transaction API (JTA) is part of Java Enterprise Edition and it supports the two-phase commit approach to manage transactions.",
      },
      {
        text: "What is the role of the transaction dispatcher in a two-phase commit protocol?",
        options: [
          "To execute transactions",
          "To rollback transactions",
          "To prepare transactions",
          "To control transactions",
        ],
        answer: "To control transactions",
        explanation:
          "The transaction dispatcher in a two-phase commit protocol acts as a mediator controlling the transactions. It ensures that all transactions are prepared and ready to be committed.",
      },
      {
        text: "What are the drawbacks of the two-phase commit approach?",
        options: [
          "It's blocking and has the potential for a single point of failure",
          "It's not suitable for distributed systems",
          "It doesn't have a mediator",
          "It doesn't require any preparation of transactions",
        ],
        answer:
          "It's blocking and has the potential for a single point of failure",
        explanation:
          "The two-phase commit approach leaves transactions in a blocking state for an indefinite time. The transaction dispatcher, or mediator, can also fail, potentially leading to transactions being blocked for a long time, maybe even indefinitely.",
      },
      {
        text: "Which of the following is NOT a property of distributed systems according to the CAP theorem?",
        options: [
          "Consistency",
          "Partition tolerance",
          "Redundancy",
          "Availability",
        ],
        answer: "Redundancy",
        explanation:
          "The CAP theorem refers to Consistency, Availability, and Partition tolerance. Redundancy is not a property covered by this theorem.",
      },
      {
        text: "Which property of distributed systems means that all clients see the same view of the data?",
        options: [
          "Partition tolerance",
          "Consistency",
          "Availability",
          "Decentralization",
        ],
        answer: "Consistency",
        explanation:
          "Consistency in a distributed system means all clients see the same data. If one client changes the data, another client should see this change immediately.",
      },
      {
        text: "What is eventual consistency?",
        options: [
          "Data is synchronized immediately",
          "Data is never synchronized",
          "Data is synchronized over time",
          "Data is inconsistently synchronized",
        ],
        answer: "Data is synchronized over time",
        explanation:
          "Eventual consistency refers to the state when data will be synchronized over time, not immediately. During this time, the system can be inconsistent.",
      },
      {
        text: "What does availability mean in the context of the CAP theorem?",
        options: [
          "All clients see the same view of the data",
          "The system works even when split into parts",
          "Every client can find a replica of the data in case of partial node failures",
          "The system is always consistent",
        ],
        answer:
          "Every client can find a replica of the data in case of partial node failures",
        explanation:
          "In the context of the CAP theorem, availability refers to the property that every client can find a replica of the data even in the event of partial node failures.",
      },
      {
        text: "What does partition tolerance refer to in the CAP theorem?",
        options: [
          "The system is always consistent",
          "The system may work even when split into parts",
          "All clients see the same view of the data",
          "Every client can find a replica of the data in case of partial node failures",
        ],
        answer: "The system may work even when split into parts",
        explanation:
          "Partition tolerance in the CAP theorem refers to the capability of the system to function as expected even in the presence of network failures that split the system into two or more parts.",
      },
      {
        text: "What kind of systems is the two-phase commit protocol most suitable for?",
        options: [
          "Consistent and Available systems",
          "Consistent and Partition-tolerant systems",
          "Available and Partition-tolerant systems",
          "None of the above",
        ],
        answer: "Consistent and Available systems",
        explanation:
          "The two-phase commit protocol is suitable for systems that require consistency and availability but can tolerate a lack of partition tolerance.",
      },
      {
        text: "What kind of system does the SAGA pattern support according to the CAP theorem?",
        options: [
          "Consistent and Available systems",
          "Consistent and Partition-tolerant systems",
          "Available and Partition-tolerant systems",
          "None of the above",
        ],
        answer: "Available and Partition-tolerant systems",
        explanation:
          "The SAGA pattern supports systems that are available and partition-tolerant, but it does not guarantee immediate consistency, only eventual consistency.",
      },
      {
        text: "According to the CAP theorem, how many properties out of Consistency, Availability, and Partition tolerance can be satisfied at the same time?",
        options: ["1", "2", "3", "4"],
        answer: "2",
        explanation:
          "The CAP theorem states that in any distributed system, we can only guarantee two out of the following three properties at the same time: Consistency, Availability, and Partition tolerance.",
      },
      {
        text: "Why is it difficult to implement consistency in distributed systems?",
        options: [
          "Because data is never synchronized",
          "Because it requires immediate synchronization between all nodes",
          "Because it requires partition tolerance",
          "Because it requires availability",
        ],
        answer:
          "Because it requires immediate synchronization between all nodes",
        explanation:
          "Consistency in distributed systems is difficult to achieve because it requires all clients to see the same view of the data at any given time. This requires immediate synchronization between all nodes, which is challenging to implement in a distributed environment.",
      },
      {
        text: "In a two-phase commit, what happens when one of transactions cannot go to the transaction-prepared state?",
        options: [
          "All transactions are committed",
          "The system crashes",
          "All transactions are rolled back",
          "The system becomes inconsistent",
        ],
        answer: "All transactions are rolled back",
        explanation:
          "In a two-phase commit, if any of the transactions cannot reach the transaction prepared state, all the transactions will be rolled back to maintain data consistency.",
      },
      {
        text: "In a two-phase commit, what does preparing a transaction mean?",
        options: [
          "Acquiring every lock and preparing everything to commit a transaction",
          "Unlocking all resources",
          "Committing all operations",
          "Starting a new transaction",
        ],
        answer:
          "Acquiring every lock and preparing everything to commit a transaction",
        explanation:
          "In a two-phase commit, preparing a transaction means that every lock is acquired and everything is ready to commit the transaction, but it has not been committed yet.",
      },
      {
        text: "In a SAGA pattern, what is a compensating transaction?",
        options: [
          "A transaction that reduces the amount of data transferred",
          "A transaction that checks the consistency of data",
          "A transaction that reverses a previous operation",
          "A transaction that locks the database for editing",
        ],
        answer: "A transaction that reverses a previous operation",
        explanation:
          "A compensating transaction in a SAGA pattern is used to reverse the effect of a previous operation in the case of failure.",
      },
      {
        text: "What are the two approaches to implementing SAGA?",
        options: [
          "Database and Message Queue",
          "Choreography and Orchestration",
          "Compensation and Reversal",
          "Microservice and Monolith",
        ],
        answer: "Choreography and Orchestration",
        explanation:
          "The two main ways to implement the SAGA pattern are Choreography, where each microservice manages its own transactions, and Orchestration, where a central orchestrator manages the transactions.",
      },
      {
        text: "How does the Choreography approach to SAGA operate?",
        options: [
          "Through a central orchestrator",
          "Through a shared database",
          "Each service manages its own transactions",
          "Through a single service managing all transactions",
        ],
        answer: "Each service manages its own transactions",
        explanation:
          "In the Choreography approach, each microservice or service performs the operation internally as a local transaction and then passes the request to the next microservice in the chain.",
      },
      {
        text: "How does the Orchestration approach to SAGA operate?",
        options: [
          "Through a central coordinator",
          "Through a shared database",
          "Each service manages its own transactions",
          "Through a single service managing all transactions",
        ],
        answer: "Through a central coordinator",
        explanation:
          "In the Orchestration approach, a central coordinator or service manages all the transactions.",
      },
      {
        text: "Which SAGA approach is more distributed and flexible?",
        options: ["Choreography", "Orchestration", "Neither", "Both"],
        answer: "Choreography",
        explanation:
          "The Choreography approach is more distributed and flexible as each service is self-controlled and implements operations internally.",
      },
      {
        text: "Which approach is more resilient to failures?",
        options: ["Choreography", "Orchestration", "Neither", "Both"],
        answer: "Choreography",
        explanation:
          "Choreography is more resilient to failures as failure is isolated to individual services.",
      },
      {
        text: "How does a SAGA pattern differ from a two-phase commit regarding consistency?",
        options: [
          "SAGA guarantees strong consistency",
          "Two-phase commit guarantees eventual consistency",
          "SAGA guarantees eventual consistency",
          "Two-phase commit and SAGA guarantee the same level of consistency",
        ],
        answer: "SAGA guarantees eventual consistency",
        explanation:
          "SAGA does not guarantee strong consistency like a two-phase commit. It ensures eventual consistency, where the system becomes consistent at some point after the operation.",
      },
      {
        text: "Which pattern can be used for implementing distributed transactions?",
        options: ["Two-phase commit", "SAGA", "Both", "Neither"],
        answer: "Both",
        explanation:
          "Both SAGA and Two-phase commit are applicable for implementing distributed transactions.",
      },
      {
        text: "Which pattern is suitable for long-lived transactions running on several distributed microservices?",
        options: ["Two-phase commit", "SAGA", "Both", "Neither"],
        answer: "SAGA",
        explanation:
          "SAGA is suitable for long-lived transactions running on several distributed microservices, as it is designed for managing distributed transactions.",
      },
      {
        text: "Which of the following is a drawback of a two-phase commit?",
        options: [
          "It is blocking in nature",
          "It does not support distributed transactions",
          "It does not ensure data consistency",
          "It does not require locks on resources",
        ],
        answer: "It is blocking in nature",
        explanation:
          "A significant drawback of a two-phase commit is that it is blocking in nature, leaving the database in a blocked state for an indefinitely long time.",
      },
      {
        text: "Which pattern avoids resource locking?",
        options: ["Two-phase commit", "SAGA", "Both", "Neither"],
        answer: "SAGA",
        explanation:
          "The SAGA pattern avoids resource locking, behaving like optimistic transactions.",
      },
      {
        text: "In a SAGA pattern, when does a system show an inconsistent state?",
        options: [
          "Always",
          "Never",
          "Between two local transactions",
          "After all transactions are complete",
        ],
        answer: "Between two local transactions",
        explanation:
          "In a SAGA pattern, at some moment in time, for example, between two local transactions, the system can be in an inconsistent state.",
      },
      {
        text: "How does SAGA pattern isolate transactions?",
        options: [
          "It does not provide isolation",
          "Isolation is managed globally",
          "Isolation is managed only locally",
          "Isolation is managed by the transaction coordinator",
        ],
        answer: "Isolation is managed only locally",
        explanation:
          "In a SAGA pattern, isolation is managed only at the local level, each transaction is independent of the others.",
      },
      {
        text: "What happens in a SAGA pattern if the system experiences a long timeout?",
        options: [
          "The current transaction is paused and resumed later",
          "The entire SAGA is restarted from the beginning",
          "The current operation is canceled and compensated",
          "The system waits indefinitely for the timeout to be resolved",
        ],
        answer: "The current operation is canceled and compensated",
        explanation:
          "In a SAGA pattern, if a timeout occurs (i.e., service is unavailable for a long time), the operation fails and all previous operations are rolled back.",
      },
      {
        text: "How is a single point of failure problem managed in the SAGA pattern?",
        options: [
          "It is prevented by having a central orchestrator",
          "It is prevented by having each service control its own transactions",
          "It is not managed and can occur",
          "It is managed by the database",
        ],
        answer:
          "It is prevented by having each service control its own transactions",
        explanation:
          "The SAGA pattern manages the single point of failure problem by decentralizing control, especially in the Choreography approach. Each service controls its own transactions, eliminating a single point of failure.",
      },
      {
        text: "What kind of transaction behavior does the SAGA pattern resemble?",
        options: [
          "Optimistic transactions",
          "Pessimistic transactions",
          "Traditional transactions",
          "Distributed transactions",
        ],
        answer: "Optimistic transactions",
        explanation:
          "The SAGA pattern resembles optimistic transactions where it hopes it won't need to rollback. If a rollback is required, the SAGA pattern can run compensating transactions to roll back the whole sequence of operations.",
      },
    ],
  },
  8: {
    title: "Topic 4. Microservices Data Management",
    subtitle: "Quiz 2. Event Sourcing and CQRS",
    questions: [
      {
        text: "In Event Sourcing, are events mutable or immutable?",
        options: [
          "Mutable",
          "Immutable",
          "They can be either mutable or immutable",
          "It depends on the configuration",
        ],
        answer: "Immutable",
        explanation:
          "Events in Event Sourcing are immutable, which means they cannot be modified or deleted once they are recorded.",
      },
      {
        text: "Which of the following benefits is NOT associated with using the Event Sourcing pattern?",
        options: [
          "Audit trail",
          "Time traveling",
          "Centralized state management",
          "Event versioning",
        ],
        answer: "Centralized state management",
        explanation:
          "Event sourcing does not provide centralized state management. Instead, it relies on the sequence of events to recreate the system state.",
      },
      {
        text: "Why are events immutable in the context of Event Sourcing?",
        options: [
          "To prevent changes to the current state.",
          "To avoid inconsistencies in the database.",
          "To allow event multicasting.",
          "To preserve the history of what has happened in the system.",
        ],
        answer: "To preserve the history of what has happened in the system.",
        explanation:
          "Events are immutable in event sourcing to ensure that the history of what has happened in the system is preserved and cannot be modified or deleted.",
      },
      {
        text: "What does Event Sourcing rely on as a source of truth?",
        options: ["Traditional database", "Event log", "Event bus", "Cache"],
        answer: "Event log",
        explanation:
          "For Event Sourcing, the event log is relied upon as a source of truth, unlike traditional databases where logs are complementary.",
      },
      {
        text: "How does event sourcing enable effective debugging in case of exceptions?",
        options: [
          "Event sourcing allows an immediate rollback of an exception.",
          "It enables the exact restoration of the system's state at the moment when the exception occurred.",
          "It allows for real-time tracking of exceptions.",
          "It prevents exceptions from occurring.",
        ],
        answer:
          "It enables the exact restoration of the system's state at the moment when the exception occurred.",
        explanation:
          "Event sourcing makes it possible to restore the exact state of the system at the moment an exception or error occurred. This makes it much easier to investigate what led to the exception, which in traditional state systems can be much more difficult to achieve as it is typically harder to reproduce past system states.",
      },
      {
        text: "How does Event Sourcing enable faster reconstruction of the system state?",
        options: [
          "By using caching",
          "By using event versioning",
          "By applying snapshots",
          "By multicasting events",
        ],
        answer: "By applying snapshots",
        explanation:
          "Event Sourcing enables faster reconstruction of the system state by using snapshots, which allow applying only the events that occurred after the snapshot.",
      },
      {
        text: "What is the benefit of implementing alternative history with Event Sourcing?",
        options: [
          "It reduces duplication of data",
          "It improves debugging",
          "It enables faster event processing",
          "It allows reconstructing the system under different conditions",
        ],
        answer:
          "It allows reconstructing the system under different conditions",
        explanation:
          "Implementing alternative history with Event Sourcing allows reconstructing the system under different conditions, enabling testing and debugging various scenarios.",
      },
      {
        text: "What is a significant advantage of using Event Sourcing for scalability?",
        options: [
          "Centralized state management",
          "Event versioning",
          "Possibility to use debugging",
          "Events multicasting",
        ],
        answer: "Events multicasting",
        explanation:
          "Event sourcing enables the multicasting of events to multiple receivers, making it useful for handling distributed systems and processing events by many different systems in parallel.",
      },
      {
        text: "What is eventual consistency in the context of Event Sourcing?",
        options: [
          "The event data is immediately consistent across all services.",
          "The event data is never consistent across all services.",
          "The event data is always consistent within a single service.",
          "The event data becomes consistent across all services over time.",
        ],
        answer:
          "The event data becomes consistent across all services over time.",
        explanation:
          "Eventual consistency in Event Sourcing means that while different services may receive and process the event data at different times, all the services will eventually have the same, consistent data.",
      },
      {
        text: "How does Event Sourcing handle storing the same data in different systems?",
        options: [
          "It uses a single schema for all systems.",
          "It stores the same data in different formats depending on the receiver.",
          "It does not allow storing the same data in different systems.",
          "It always uses a relational database to store data.",
        ],
        answer:
          "It stores the same data in different formats depending on the receiver.",
        explanation:
          "Event Sourcing allows storing the same data in different systems and formats. The data format can vary depending on the receiver and its requirements.",
      },
      {
        text: "What does CQRS stand for?",
        options: [
          "Centralized Query Responsibility Segregation",
          "Command Query Responsibility Separation",
          "Command Query Responsibility Segregation",
          "Centralized Query Responsibility Separation",
        ],
        answer: "Command Query Responsibility Segregation",
        explanation:
          "CQRS stands for Command Query Responsibility Segregation.",
      },
      {
        text: "In CQRS, what type of operation is responsible for updating the write database?",
        options: ["Events", "Commands", "Queries", "Observers"],
        answer: "Commands",
        explanation:
          "In CQRS, commands are responsible for updating the write database, representing actions that need to be performed.",
      },
      {
        text: "What is the purpose of CQRS?",
        options: [
          "To separate reading and writing operations",
          "To store events in a log",
          "To enable time traveling",
          "To implement event versioning",
        ],
        answer: "To separate reading and writing operations",
        explanation:
          "CQRS separates reading and writing operations, using different databases for each purpose.",
      },
      {
        text: "What is the difference between Commands and Events?",
        options: [
          "Commands answer the question what should be done, while events answer what has happened.",
          "Commands are immutable, while events are mutable.",
          "Commands and events serve the same purpose and are interchangeable.",
          "Commands are used for auditing, while events are used for debugging.",
        ],
        answer:
          "Commands answer the question what should be done, while events answer what has happened.",
        explanation:
          "In Event Sourcing, commands answer the question what should be done, while events answer the question what has happened.",
      },
      {
        text: "Which of the following statements is true about events in CQRS?",
        options: [
          "Events are mutable and can be modified.",
          "Events are used to synchronize the read-only and write databases.",
          "Events answer the question of what should be done in the system.",
          "Events can be deleted after being processed.",
        ],
        answer:
          "Events are used to synchronize the read-only and write databases.",
        explanation:
          "Events are used to synchronize the read-only and write databases in Event Sourcing, allowing changes to be propagated to the read database eventually.",
      },
      {
        text: "What is one of the drawbacks of using the CQRS pattern?",
        options: [
          "Increased complexity",
          "Inability to handle read operations efficiently",
          "Limited scalability for reading",
          "Dependence on a specific type of database",
        ],
        answer: "Increased complexity",
        explanation:
          "One of the drawbacks of using the CQRS pattern is its increased complexity in implementation and maintenance compared to traditional architectures.",
      },
      {
        text: "What is the primary purpose of using the message broker in CQRS?",
        options: [
          "To handle command synchronization",
          "To enable time traveling",
          "To store events in the event log",
          "To facilitate synchronization between write and read databases",
        ],
        answer:
          "To facilitate synchronization between write and read databases",
        explanation:
          "The primary purpose of the message broker in CQRS is to facilitate synchronization between the write and read databases by handling events.",
      },
      {
        text: "In which situation would implementing the CQRS pattern be considered over-engineering?",
        options: [
          "If you have a small number of readers",
          "If you have a small number of writers",
          "If your system doesn't have eventual consistency",
          "In any of these cases",
        ],
        answer: "If you have a small number of readers",
        explanation:
          "Using the CQRS pattern could be over-engineering in cases where there are fewer readers.",
      },
    ],
  },
  9: {
    title: "Topic 5. Microservices Communication",
    subtitle: "Quiz 1. Synchronous communication",
    questions: [
      {
        text: "What is the primary purpose of JSON in microservices communication?",
        options: [
          "Encryption",
          "Data representation in textual format",
          "Binary data transfer",
          "Synchronous communication",
        ],
        answer: "Data representation in textual format",
        explanation:
          "JSON is used for representing data in a textual format for communication. It is not used for encryption, binary data transfer, or specifically for synchronous communication.",
      },
      {
        text: "What is REST in the context of microservices communication?",
        options: [
          "A Protocol",
          "A Communication Standard",
          "An Architectural Style",
          "A Programming Language",
        ],
        answer: "An Architectural Style",
        explanation:
          "REST is not a network protocol but an architectural style.",
      },
      {
        text: "Which REST client implementation library is recommended if reactivity is not required?",
        options: ["WebClient", "RestTemplate", "OpenFeign", "gRPC"],
        answer: "OpenFeign",
        explanation: "OpenFeign has great performance and brevity.",
      },
      {
        text: "Which client library is now the default REST client protocol in Spring?",
        options: ["REST template", "WebClient", "OpenFeign", "gRPC"],
        answer: "WebClient",
        explanation:
          "Web Client is now the default rest client protocol in Spring.",
      },
      {
        text: "How is the OpenFeign client declared when used in the project?",
        options: [
          "With a concrete class",
          "With an XML configuration",
          "Using annotations only",
          "Using an interface",
        ],
        answer: "Using an interface",
        explanation:
          "OpenFeign is described as a 'declarative REST client.' For OpenFeign, you just need to define an interface, just like Spring Data repository. Implementation will be provided automatically.",
      },
      {
        text: "What needs to be added to Spring configuration to use the Feign client in Spring?",
        options: [
          "@RESTController",
          "@EnableWebClient",
          "@EnableFeignClients",
          "@EnableFeign",
        ],
        answer: "@EnableFeignClients",
        explanation:
          "Adding '@EnableFeignClients' to Spring configuration allows generating Feign client implementation.",
      },
      {
        text: "What benefit does using a shared library provide for microservices communication?",
        options: [
          "Increases communication speed",
          "Guarantees API synchronization between the services",
          "Reduces server load",
          "Enables reactivity",
        ],
        answer: "Guarantees API synchronization between the services",
        explanation:
          "Using a shared library ensures that both the client and service are synchronized regarding endpoints, method signatures, and return types.",
      },
      {
        text: "In which way does OpenFeign simplify microservices communication?",
        options: [
          "It provides real-time analytics",
          "It hides communication details",
          "It compresses the data for faster transmission",
          "It encrypts all communication",
        ],
        answer: "It hides communication details",
        explanation:
          "OpenFeign hides all the communication details, making remote calls look like local calls.",
      },
      {
        text: "Which communication detail does OpenFeign hide, making it appear like a local call?",
        options: [
          "Data storage details",
          "Data encryption methods",
          "Remote call mechanics",
          "Logging details",
        ],
        answer: "Remote call mechanics",
        explanation:
          "OpenFeign is making a remote call, but it appears like a local call.",
      },
      {
        text: "What is the primary benefit of using gRPC?",
        options: [
          "Textual data transfer",
          "Maximal performance",
          "JSON representation",
          "Based on HTTP/1.1",
        ],
        answer: "Maximal performance",
        explanation:
          "gRPC is usually used if you need to provide maximal performance.",
      },
      {
        text: "What does the BookService API ensure when used as a shared library?",
        options: [
          "Encapsulation",
          "Encryption",
          "Synchronization of API between the client and the service",
          "Reactivity",
        ],
        answer: "Synchronization of API between the client and the service",
        explanation:
          "Using BookService API as a shared library ensures that both the client and the service are synchronized regarding endpoints, method signatures, and return types.",
      },
      {
        text: "What is protoc used for in the context of gRPC?",
        options: [
          "Starting the server",
          "Generating binary format data",
          "Code generation",
          "Error handling",
        ],
        answer: "Code generation",
        explanation:
          "Protoc stands for protobuf compiler and is used for code generation.",
      },
      {
        text: "For which scenario might gRPC show significant performance benefits over REST?",
        options: [
          "Transmission of large volumes of data",
          "Sending individual text messages",
          "Code deployment",
          "Synchronizing databases",
        ],
        answer: "Transmission of large volumes of data",
        explanation:
          "gRPC is more efficient when transmitting large amounts of data in binary format.",
      },
      {
        text: "Which of the following is NOT a characteristic of gRPC?",
        options: [
          "Bidirectional streaming",
          "Language-specific contracts",
          "Flow control",
          "Error handling",
        ],
        answer: "Language-specific contracts",
        explanation:
          "gRPC provides strongly typed contracts that are universal and not language-specific.",
      },
      {
        text: "What is the main drawback of gRPC when compared to REST?",
        options: [
          "It's less performant",
          "Its complexity",
          "It lacks error handling",
          "It doesn't support HTTP/2",
        ],
        answer: "Its complexity",
        explanation:
          "The main drawback of gRPC is its complexity and steep learning curve when compared to REST.",
      },
    ],
  },
};
