#Intro
- [Computer Networks: A Systems Approach](https://book.systemsapproach.org/index.html)
Network sizes:
- LAN: Within organisation or physical location
- WAN: Geographically dispersed
- Internet: Global set of interconnected WANs

Basic requirement of network is to send data from A to B regardless of distance
Needs:
- Address of destination
- Route to get to destination
- Get processed at intermediate nodes
- Follow certain protocols

Files are divided into packets and travels through physical link through nodes, reaches destination and gets processed (re-ordered, error checking, buffering) then is completely 'sent'.

##OSI 7 layer model
7. Application
6. Presenation
5. Session
4. Transport
3. Network
2. Data Link
1. Physical

##5 layer model (TCP/IP)
1. Physical: Wires, fibre optics, radio, etc.
2. Link Layer: Ethernet, MAC addressing, CSMA
3. Network layer: Routing protocols, IP
4. Transport Layer: TCP/UDP
5. Application Layer: DNS, HTTP, email
Note: Layer 5 covers layers 7 - 5 in OSI 7 layer model

Packets are encapsulated from all lower layers, e.g. IP headers wrap TCP/UDP headers wrap HTTP requests
Each layer encapsulates one aspect of network transport, and eases maintenance/updating of each layer.

Network protocols govern communication activity, setting out standards and are defined in all layers.
Higher level layers typically have wider variety of protocols.

Network Application Layer
Directly supports apps users interact with such as email, web, VoIP, etc.

Client-Server Architecture is usually implemented via sockets
Servers must have unique Internet-wide address, containing IP address of the host machine and the port number the server is listening on:
e.g. 127.0.0.1:80

There are standardised port numbers:
22: ssh
80: http
443: https

IPv4 uses four 32-bit numbers. IPv6 uses eight 128-bit numbers.
IPv4 has 4 billion addresses, but IPv6 has 10^38

##Application layer protocols
- Type of message
- Message syntrax
- Message semantics
- Processing rules
Can be open like HTTP or proprietary like Skype

###HTTP
- Extremely important protocol
- Message types: URL requests and Web Page responses
- Message syntax: Headers + data
- Client-server model with web browsers as client communicating with web servers
- To perform HTTP, use TCP connection between server and client to send HTTP messages
- \r\n is carriage return then line feed

e.g. GET request
```
GET /index.html HTTP/1.1\r\network
Host: www.google.com\r\n
\r\n
```

e.g. 200 OK response
```
HTTP/1.1 200 OK\r\n
Content-Type: text/html\r\n
\r\n
data
```

##DNS (Domain Name System)
- Provides name->IP address mapping
- A given IP address may be reachable via several names
- A given name may map to several IPs for load distribution
- Implemented via heirarchy of name servers
- Not centralised to reduce point of failure, spread load and reduce lag to geographically distant name servers

DNS Heirarchy
- Root DNS Server
- .com/.org/.edu etc. Server
- amazon.com/pbs.org/poly.edu Server

DNS Query
- Iterated: Work done by client, where servers give response of 'closer' servers and client repeats
- Recursive: Work done by name servers, where servers propogates query through to other servers

#Transport Layer
- Data integrity
- Timing
- Throughput
- Security
e.g. File transfers are not time sensitive and don't have a required throughput, but require 100% integrity
Online games are loss tolerant, require a minimum throughput and allow few seconds of transmission delay

Transport Layer Protocols
- Two main Transport Layer protocols are TCP/UDP
- TCP: Reliable, connection oriented, byte-stream
- UDP: Unreliable, connectionless, simple segments

TCP (Transmission Control Protocol)
- Reliable transport of data
- Provides flow control so it doesn't overwhelm receiver
- Congestion control
- Requires a setup of connection between client and server
- No timing/throughput guarantees, no security

UDP (User Datagram Protocol)
- Fast (for sender)
- Unreliable
- No reliability, flow control or timing/throughput guarantees, no security

Transport Layer/ Network Layer
- TCP is typically layered on top of IP protocol on the Network Layer
- TCP sets up connection between sender and receiver
- Sender transmits a pipeline of segments
- Expect ACK (acknowledgement) for each segment, otherwise retransmits
- Receiver manages collating of segments

UDP vs TCP
- UDP has smaller segment headers and no connection costs
- UDP senders transmit segments as fast as they like
- Segments can be handled independently
- Effective for low-latency apps that can tolerate lost packets
- DNS, TFTP, RTSP use UDP

#Network Layer
- IP (Internet Protocol) is a network layer protocol
- Provides host addressing and routing of packets
- Splitting and reassembly of large packets

IP Routing
- Each host has a routing table that maps addresses to next hop
- Uses subnets to reduce table size, IP addresses with common start/prefix sent to a gateway host
- Routing table is dynamically maintained and transmit 'active' signals to each other periodically

IP Forwarding
- Send packet to destination if match, else
- Check routing table and send to next-hop address given, else
- Send to default route if it exists, else
- Cannot find route, return error message to sender

#Link Layer
Takes packets from network layer and transmits them
- Combination of hardware/software
- Each host contains a NIC (network interface card)
- Every host on network has network layer implementation

Link Layer
- Flow control to adjust pacing between nodes
- Error detection and flags errors to network layer
- Error correction, can correct single bit errors. If not correctable, request retransmission

Ethernet
- Example of link layer implementation
- Data tagged with receiver MAC address and broadcasted onto cable
- Devices recognise own data using MAC address (Media Access Control, stored in NIC)
- Because shared broadcast medium, can be interference and collision
- Interference: two different packets broadcasted at same time
- Collision: Node receives more than one signal at the same time

Multiple access protocols
- Prevent interference and collision
- Channel partitioning partitions channel based on time-slices/frequency bands, etc.
- Random access allows collisions with mechanisms to recover
- Taking turns, and allowing nodes with more to send having longer turns

Random Access protocol: CSMA
1. NIC receives packet from network layer, creates a frame
2. If channel idle, start frame transmission, else wait until idle
3. Transmit frame, end if no interference
4. If interference detected, abort transmission
5. Choose a random delay time before retrying from step 2


## Quick Overview of Searching Google.com/
- URL parsing to get domain, protocol and port. Check HSTS to see if HTTP or HTTPS
- DNS lookup to get IP address via UDP
	- Assuming not in local cache, send ARP Request to find MAC address of router/gateway
	- Send DNS request to gateway, gateway performs NAT (Network Address Translation)
	- Router forwards request to ISP (Internet Service Provider)
	- If ISP doesn't know, recusive search is performed until IP address found
	- Router forwards response from ISP to machine
- Open a TCP socket and requests a TCP connection. Bunch of SYN, ACKs and FIN to open the connection
- TLS handshake, where cipher and compression is chosen, certificate is checked against CA's (Certificate Authority), Diffie-Helman and RSA used to create a signed symmetric key
- Send the first HTTP GET request to retrieve the page, a HTTP 200 response with HTML and other data
- HTML parsing by the browser to render the page and fetching any external resources
- Page is loaded for the user to interact with