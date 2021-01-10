# JupyterHub

[JupyterHub](https://jupyter.org/hub) is a powerful program that allows companies, classrooms or research labs to share computational hardware and run _notebook_ based code concurrently. [Jupyter's](https://jupyter.org/index.html) goal is to provide interactive computing software for different programming languages. JupyterHub allows multiple users to take advantage of a single server by separating user processes and programs. 

We foresee much of our development to be done through JupyterHub as it is simple to use, scalable and functions well for multiple use cases.

_Last Update_: Friday, December 18th, 2020

## Table of Contents
- [Setup Guide](#setup-guide)
  - [Initializing an SSH Tunnel](#initializing-an-ssh-tunnel)
  - [Opening JupyterHub in your Browser](#opening-jupyterhub-in-your-browser)
- [Running](#running)
- [Management](#management)
- [Support](#support)
- [See Also](#see-also)

## Setup Guide

JupyterHub (and Jupyter in general) has a server based design. A server is responsible for running the actual code, and a client (typically visualized in a browser) can write code for the server to run. On our workstation, there is a always running server setup. This is nice, as you will never need to launch the server yourself. So, JupyterHub is essentially setup already.

### Initializing an SSH Tunnel

For you to be able to visualize JupyterHub in your browser, your computer needs to know that there is a JupyterHub instance running on the workstation. This can be done through something called an SSH Tunnel. Please see [this](/wa_wiki/technical/SSH.html) readme for information about SSH and SSH Tunneling.

Jupyter is run on port `8000`, so you must forward that port to your own computer. In theory, you can map `8000` to any port you'd like, but we'll leave it at `8000` for simplicity. Your command may look something like this:
```bash
ssh -L 8000:localhost:8000 -J <cae username>@best-tux.cae.wisc.edu <cae username>@carproject-06.engr.wisc.edu
```

### Opening JupyterHub in your Browser

Your computer should now have access to the JupyterHub server. To open up Jupyter, go to a browser and type in `localhost:8000/jupyter`. This should open a webpage with a login prompt. Login with your cae credentials.

## Running

`TODO`

## Management

This JupyterHub instance was configured with simplicity and scalability in mind. Because long term changes were unknown at the time (whether we will get more workstations, number of users, etc.), [The Little JupyterHub](https://tljh.jupyter.org/en/latest/) was not chosen here. Instead, [this tutorial](https://jupyterhub.readthedocs.io/en/stable/installation-guide-hard.html) was followed to configure the system.

For your convenience, a installation guide is described below. Only information regarding configuration is given in here. Some steps vary from the original tutorial, so please refer to this guide if the goal is to configure the system.

### Setting up JupyterHub

The JupyterHub instance was created in a virtualenv located at `/opt/jupyterhub`. As you'll see later, this is the location we will place many configuration based files.

The `jupyterhub_config.py` file, the main file that manages the system configuration for JupyterHub, is located at `/opt/jupyterhub/etc/jupyterhub/` (within the virtualenv we created earlier). By default, the user interface is set to display as JupyterLab, which is essentially a newer release of Jupyter Notebook with extended IDE-like features. To changes this, set the following option in the `jupyterhub_config.py` file (currently it's set to `/lab`):
```yaml
c.Spawner.default_url = '/tree'
```

To have JupyterHub run on startup, a system service used and run by [Systemd](https://man7.org/linux/man-pages/man1/systemd.1.html). The `.service` file is located at `/opt/jupyterhub/etc/systemd/jupyterhub.service`. There shouldn't be much to change here, but this basically just runs JupyterHub and loads in the config file we created.

[Anaconda](https://docs.conda.io/en/latest/) was used for managing different Python environments. Anaconda is managed using modulefiles, of which we wrote a [readme about](/wa_wiki/technical/Modules.html). The location of the `conda` environments deviates from the original guide because of the `modulefile` management system. A default `conda` environment was made with only a few packages. Since it is a global install, `pip install` or `conda install` isn't allowed. Instead, users should create their own conda environment to have custom installs.

Furthermore, located within the `jupyterhub_config.py`, the `autonomous-sudo` user group has been configured as admins of the JupyterHub instance.

:exclamation: TODO: Details on how to setup conda env for user :exclamation:

:exclamation: TODO: Security details. As of 1/5/2020 our domain (www.wisconsinautonomous.org) is owned by Wix.com, so will need to wait at a minimum 60 days to configure custom URL, i.e. still have to use `localhost:8000/jupyter` :exclamation:

## Support

Contact [Aaron Young](aryoung5@wisc.edu) for any questions or concerns regarding the contents of this repository.

## See Also

Stay up to date with our technical info by following our [blog](https://www.wisconsinautonomous.org/blog).

Follow us on [Facebook](https://www.facebook.com/wisconsinautonomous/), [Instagram](https://www.instagram.com/wisconsinautonomous/), and [LinkedIn](https://www.linkedin.com/company/wisconsin-autonomous/about/)!

<img src="https://github.com/WisconsinAutonomous/wa-resources/blob/master/Images/WA.png?raw=true" alt="Wisconsin Autonomous Logo" height="100px">  <img src="https://github.com/WisconsinAutonomous/wa-resources/blob/master/Images/UWCrest.png?raw=true" alt="University of Wisconsin - Madison Crest" height="100px" align="right">