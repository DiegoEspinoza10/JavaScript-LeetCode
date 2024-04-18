class Solution:
    def longestWord(self, text):
        
        longest = 0
        word = ""
        myArray = text.split()
        
        #I Know this works
        for x in range(len(myArray)):
            if(len(myArray[x]) > longest and len(myArray[x]) % 2 == 0):
                longest = len(myArray[x])
                word = myArray[x]
        return word

# Create an instance of the Solution class
solution = Solution()

# Call the removeDuplicates function with a list as an argument
print(solution.longestWord("My name is diego and I am a software engineer"))