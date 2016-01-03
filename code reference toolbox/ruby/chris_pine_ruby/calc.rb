###########################################################
#                                                         #
#               chris pine ruby tutorial                  #
#      https://pine.fm/LearnToProgram/chap_05.html        #
#                                                         #
###########################################################


puts 1 + 2 # print with line rtn
puts 1.0 + 2.0
puts 9.0 / 2.0
puts 98 + (59872/ (13*8)) * -52
def minutesPerDecade
   year = 365
   day = 24
   puts year * day
end
minutesPerDecade

puts 'Hello' + ' everybody'
puts 'again ' * 10

varsAreCamelCaseNoVarTextNeeded = 'assign this please.'
anotherVariable = ' If you don\'t mind.'
puts varsAreCamelCaseNoVarTextNeeded + anotherVariable

num1 = 2
num2 = '2'
puts num1.to_s + num2 # 22

# puts gets would gives empty cmd line and puts whatever we type
puts 'hello there, your name?'
name = gets.chomp # chomp removes the "enter" from our input string
puts 'HELLO ' + name.upcase + ' I\'M YELLING! ' + name.length.to_s + ' CHARS IN YOUR NAME!'

# if objects like strings, integers etc are ruby nouns
# ruby verbs are methods! so "clock.tick" dude!
# objects "perform" methods (EVEN if no dot infront of them.)
# object.method syntax = why we say "pig*5" not "5*pig"
lineWidth = 40
chapters = 'Chapter One'
pageNumber = 485
title = 'Table of Contents'
puts title.center(lineWidth)
puts chapters.ljust(lineWidth/2) + pageNumber.to_s.rjust(lineWidth/2)

#math mehtods
puts (rand(6) + 1) # returns 1-6

command = 'hello is anyone there?'
while command != 'bye'
   puts command
   command = gets.chomp
end
puts 'come again soon.'

bottles = 99
while bottles > 0
   puts bottles.to_s + ' bottles of beer on the wall, '
   puts bottles.to_s + ' bottles of beer on the wall, '
   puts bottles.to_s + ' bottles of beer. '
   puts 'take one down, pass it around, '
   bottles -= 1
end

# the each method (verb) iterates on the needMittens array nouns
needMittens = ['bob', 'doug', 'phil']
needMittens.each do |word|
   puts word + ' has put on his mittens.'
end
puts needMittens.join(' and ') + ' need Mittens.'
puts needMittens.push 'stu'
puts needMittens.length


# array method practice...
puts 'type a word and press enter.'
puts 'repeat for as many words as you want.'
puts 'then type enter without typing anything on a line.'
puts 'ruby will return an a-z sorted list of your words.'
wordArray = []
entry = 'starter string' # to enter loop
while entry != ''
   entry = '' # loop won't repeat if no user entry
   entry = gets.chomp
   wordArray.push entry
end
puts wordArray.sort



# stopped sunday nov 29 7pm at end of ARRays and Iterators
# https://pine.fm/LearnToProgram/chap_07.html

# end
