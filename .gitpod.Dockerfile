FROM gitpod/workspace-full-vnc

# Install Discord stuff behind the scenes
WORKDIR /home/gitpod
RUN wget "https://discord.com/api/download?platform=linux&format=tar.gz" -O /tmp/discord.tar.gz \
    && mkdir -p ~/.local/lib && tar xvf /tmp/discord.tar.gz && mv ~/Discord ~/.local/lib/discord \
    && rm /tmp/discord.tar.gz \
    && sudo chown root:root ~/.local/lib/discord/chrome-sandbox && sudo chmod 4755 ~/.local/lib/discord/chrome-sandbox

# Then install Xfce4 goodies and deps for Electron-based apps
RUN sudo install-packages xfce4 xfce4-goodies libnss3 xubuntu-default-settings xubuntu-icon-theme firefox dbus dbus-x11 libgbm-dev
ENV WINDOW_MANAGER=startxfce4