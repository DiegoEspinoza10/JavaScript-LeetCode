import unittest
from EvenWord import Solution

class TestEven(unittest.TestCase):  # Define a class that inherits from unittest.TestCase
    def test_even(self):
        solution = Solution()  # Create an instance of the Solution class
        word = solution.longestWord("My name is diego and I am a software engineer")
        self.assertEqual(word, "software")

if __name__ == '__main__':
    unittest.main()
