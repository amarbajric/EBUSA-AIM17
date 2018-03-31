#!/usr/bin/env bash
echo starting EBUSA2017 on UNIX
echo ======================================
echo checking OS ...

OS='unknown'
UNAMESTR=$(uname)

if [[ "$UNAMESTR" == 'Linux' ]]; then
    OS='linux'
    echo Linux detected ...
elif [[ "$UNAMESTR" == 'Darwin' ]]; then
    OS='macOS'
    echo Mac detected ...
else
    echo No supported UNIX system detected
fi
echo ======================================

# start on Linux // tested with Ubuntu 17.10 running X11/Gnome
if [[ "$OS" == 'linux' ]]; then
    echo
    echo booting services
    echo ======================================
    echo - ServiceDiscovery
    x-terminal-emulator -e bash start_service_discovery.sh
    echo - ConfigurationService
    #x-terminal-emulator -e bash start_configuration_service.sh
    echo - ProcessModelStorage
    x-terminal-emulator -e bash start_pms.sh
    echo - ProcessEngine
    x-terminal-emulator -e bash start_engine.sh
    echo - Gateway
    x-terminal-emulator -e bash start_gateway.sh
    echo - ExternalCommunicator
    x-terminal-emulator -e bash start_ec.sh
    echo - EventLogger
    x-terminal-emulator -e bash start_event_logger.sh
    echo - GUI
    x-terminal-emulator -e bash start_gui.sh
    echo - ModellingPlatform
    x-terminal-emulator -e bash start_mpf.sh
    echo ======================================
    echo booting services done.



# start on macOS // tested with macOS Sierra (10.12.6)
elif [[ "$OS" == 'macOS' ]]; then
    echo Running AppleScript.
    echo New Terminal window will open to run scripts.
    echo ======================================
    echo Tab2 - ServiceDiscovery && echo Tab3 - ConfigurationService && echo Tab4 - ProcessModelStorage \
    && echo Tab5 - ProcessEngine && echo Tab6 - Gateway && echo Tab7 - ExternalCommunicator && echo Tab8 - EventLogger \
    && echo Tab9 - GUI && echo Tab10 - Modelling Platform
    echo ======================================
    osascript \
        -e "tell application \"Terminal\" to activate" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"cd $(PWD)\" in selected tab of the front window" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"chmod +x *.sh\" in selected tab of the front window" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_service_discovery.sh\" in selected tab of the front window" \
        #-e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        #-e "delay 0.05" \
        #-e "tell application \"Terminal\" to do script \"./start_configuration_service.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_pms.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_engine.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_gateway.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_ec.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_event_logger.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_gui.sh\" in selected tab of the front window" \
        -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
        -e "delay 0.05" \
        -e "tell application \"Terminal\" to do script \"./start_mpf.sh\" in selected tab of the front window"
    echo All services have been executed!
    echo Check Terminal window and tabs for different services.
else
    echo Process stopped!
fi

wait
