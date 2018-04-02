@echo off

echo You can start the services by choosing between dev mode and normal mode.
echo Dev-mode: Will skip the execution of the ConfigurationService
echo Normal-mode: Will start all services normally.
echo ########################################################## & echo.
:MODECHOICE
echo Choose between normal mode (1) or dev mode (2):
echo 1 - Normal mode
echo 2 - Dev mode

set /p mode=

echo Start IPPR2016
echo ########################################################## & echo.

if %mode%==1 (
echo Start ConfigurationService
echo ########################################################## & echo.
start start_configuration_service.bat
echo. & echo ##########################################################
) else if %mode%==2 (
echo Skipping Start ConfigurationService because dev mode is selected
echo ########################################################## & echo.
) else (
echo Bad Input. Input should either be '1' or '2'.
GOTO MODECHOICE
)

echo Start ServiceDiscovery
echo ########################################################## & echo.
start start_service_discovery.bat
echo. & echo ##########################################################

echo Start ProcessModelStorage
echo ########################################################## & echo.
start start_pms.bat
echo. & echo ##########################################################

echo Start Gateway
echo ########################################################## & echo.
start start_gateway.bat
echo. & echo ##########################################################

echo Start ProcessEngine
echo ########################################################## & echo.
start start_engine.bat
echo. & echo ##########################################################

echo Start ExternalCommunicator
echo ########################################################## & echo.
start start_ec.bat
echo. & echo ##########################################################

echo Start EventLogger
echo ########################################################## & echo.
start start_event_logger.bat
echo. & echo ##########################################################

echo Start GUI
echo ########################################################## & echo.
start start_gui.bat
echo. & echo ##########################################################

echo Start ModellingPlatform
echo ########################################################## & echo.
start start_mpf.bat
echo. & echo ##########################################################

echo Installation and boot finished
echo ########################################################## & echo.

pause
