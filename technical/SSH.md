# SSH

The Secure Shell (SSH) is a popular tool for remotely accessing and working with servers or computers. There are other ways to do this, but as the name suggests, SSH automatically encrypts data sent over the network, providing a private and secure connection. It has become the chosen tool for remote connections. 

SSH will allow us to access the workstation without physically going into the shop and lets multiple people use the workstation at once. Furthermore, we can set up things called SSH Tunnels to allow specific ports and software to communicate to one another between computers.

## Table of Contents
- [Setup Guide](#setup-guide)
  - [Windows](#windows)
  - [Unix](#unix)
- [SSH Tunnel](#ssh-tunnel)
- [Support](#support)
- [See Also](#see-also)

## Setup Guide

SSH is a common tool, but requires software to run it. The installation requirements vary between operating systems, so please use the correct guide for your OS.

To SSH to our workstation, you _must_ have a CAE account. Please go to https://newuser.my.cae.wisc.edu/account to register. This may take a few days

### Windows

***Under Construction***

### Unix

Mac will come preinstalled with SSH. In order to use it and to gain better understanding of the command line, we recommend using a terminal application. To do so, open Spotlight or finder and search for Terminal. Once open, it should look like a simple window with a cursor.

To now SSH to the workstation (is applicable to any other computer UNIX based OS), run the following command. _Replace `<cae username>` with your actual CAE username_:

```bash
ssh -J <cae username>@best-tux.cae.wisc.edu <cae username>@carproject-06.engr.wisc.edu
```

## SSH Tunnel

An SSH Tunnel, also called SSH Port Forwarding, is a method for transporting network data over an encrypted SSH connection. It can be used to forward network traffic over a specific port between two computers. 

Here is an extremely simple example where the port `8000` on computer A is being forwarded to your own computer.

```bash
ssh -L 8000:localhost:8000 <username>@A
```

## Support

Contact [Aaron Young](aryoung5@wisc.edu) for any questions or concerns regarding the contents of this repository.

## See Also

Stay up to date with our technical info by following our [blog](https://www.wisconsinautonomous.org/blog).

Follow us on [Facebook](https://www.facebook.com/wisconsinautonomous/), [Instagram](https://www.instagram.com/wisconsinautonomous/), and [LinkedIn](https://www.linkedin.com/company/wisconsin-autonomous/about/)!

<img src="https://github.com/WisconsinAutonomous/wa-resources/blob/master/Images/WA.png?raw=true" alt="Wisconsin Autonomous Logo" height="100px">  <img src="https://github.com/WisconsinAutonomous/wa-resources/blob/master/Images/UWCrest.png?raw=true" alt="University of Wisconsin - Madison Crest" height="100px" align="right">