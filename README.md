# Lab 5 - Starter
Name: Daniel Bonkowsky

# Check Your Understanding
1. I would not use a unit test for the message feature. The message feature is 
too big to be suitably debugged with unit tests. Testing the message feature
would require testing max message length, testing that the message is properly
recieved and displayed on the recievers device, testing that the sent message is
displayed on the senders device, and a variety of other things—such as
encryption—that should all be tested with their own, individual, unit tests.

2. The max message length feature is much more suitable to be tested with unit
tests. You could set up a few different scenarios of valid and invalid messages
and see if the messaging feature properly allows/disallows messages. This
feature is small enough to be fully debugged with unit tests.

# Links
[expose.html](https://danielbonkowsky.github.io/Lab5_Starter/expose.html)
[explore.html](https://danielbonkowsky.github.io/Lab5_Starter/explore.html)
