# Saikumar Mandaji
**Embedded Firmware Engineer · PCB Designer · IoT Systems**

Hyderabad, Telangana, India &nbsp;|&nbsp; [mandajisaikumar@gmail.com](mailto:mandajisaikumar@gmail.com) &nbsp;|&nbsp; [+91 70957 97212](tel:+917095797212) &nbsp;|&nbsp; [LinkedIn](https://linkedin.com/in/mandaji-saikumar) &nbsp;|&nbsp; [GitHub](https://github.com/saikumar-mandaji)

---

## Professional Summary

Embedded Firmware Engineer with **5+ years** delivering production-grade firmware for medical devices, industrial IoT platforms, and smart wearables. Expertise in ARM Cortex MCUs (STM32, nRF52840, Si Labs BGM220), Bluetooth LE 5.0 stack, RTOS-based multi-task architectures, and hardware-firmware co-design achieving **sub-500nA sleep currents**. Strong grounding in medical device software standards (IEC 62304, IEC 60601-1-8) and full product lifecycle — from PCB design and sensor integration to field deployment of **2500+ devices**.

---

## Experience

### Embedded Firmware Engineer
**Caropet Technologies Pvt Ltd** &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; *Apr 2024 — Present*

- Architected firmware for **5+ medical devices** — oxygen therapy systems, therapeutic gas monitors, and PediaSense pediatric monitor — on STM32 and Si Labs BGM220, following **IEC 62304 Class B** software lifecycle requirements.
- Achieved **sub-500nA sleep current** on BGM220-based BLE wearables through hardware-firmware co-optimisation: nano-power LDO selection, P-channel MOSFET load-switch isolation of all peripherals, and EM4 deep sleep with GPIO/RTC wake.
- Designed custom BLE GATT profiles and beacon systems — advertising payload packing, CCCD state management, MTU negotiation (247 bytes), and reconnection watchdog for reliable medical fleet monitoring.
- Implemented fail-safe medical alarm subsystems per **IEC 60601-1-8**: independent high-priority RTOS alarm task (100ms evaluation cycle), hardware watchdog, and NVM-backed alarm state persistence across power cycles.
- Designed analog front-end circuits including transimpedance amplifiers (10MΩ feedback, MCP1525 2.5V precision reference, PCB guard rings) for electrochemical gas sensors; signal conditioning for SpO₂, pressure, and NTC thermistor inputs.
- Built Python UART debug tooling: real-time matplotlib plotters, binary struct parsers, BLE beacon sniffers, and automated calibration scripts for production firmware validation.

---

### IoT & Firmware Developer
**Niltech Pvt Ltd** &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; *Apr 2020 — Apr 2024*

- Built **BeetleGuard** LoRa monitoring system with FreeRTOS task architecture supporting 250 sensor nodes/hub; **5 production hubs** currently active in the field with AWS IoT cloud integration.
- Delivered end-to-end firmware for **2500+ deployed smart card payphones**: RFID authentication, GSM calling, Raspberry Pi cloud sync, REST API, and remote fleet management dashboard.
- Developed industrial IoT data loggers on ESP32 handling RS485/Modbus, 4–20mA current loops (250Ω shunt + ADS1115 16-bit ADC), and 0–10V analog inputs; MQTT QoS-1 for guaranteed cloud alarm delivery.
- Prototyped ECG monitoring system on nRF52840 with AD8232 front-end: lead-off detection, 0.05Hz high-pass firmware filter for baseline wander removal, 500 SPS ADC sampling, BLE GATT streaming to mobile app.
- Integrated TF Lite / MediaPipe inference pipelines on ESP32-S3 for vision-based edge applications; automated Python testing tooling for serial device validation.
- Mentored **200+ interns** in embedded systems and IoT, guiding hardware bring-up, RTOS fundamentals, and firmware debugging methodology.

---

### Embedded Systems Intern
**Niltech Pvt Ltd** &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; *Aug 2019 — Apr 2020*

- Wrote register-level SPI, I²C, and UART peripheral drivers for STM32 (bypassing HAL) and AVR platforms; validated timing with logic analyser and oscilloscope.
- Contributed to multi-sensor integration, hardware bring-up, and functional test procedures across IoT, automation, and consumer electronics prototypes.

---

## Key Projects

| Project | Domain | Tech Stack | Outcome |
|---|---|---|---|
| **BeetleGuard — LoRa Monitor** | IoT | STM32 · LoRa SX1278 · FreeRTOS · AWS IoT | 250 nodes/hub · 5 hubs in production |
| **Oxygen Therapy System** | Medical | STM32 · MAX30102 · Flow Control Valve · IEC 62304 | SpO₂ closed-loop control with IEC 60601-1-8 alarms |
| **Therapeutic Gas Monitor** | Medical | STM32 · SGX-7NO · TIA · ADS1115 · MCP1525 | Electrochemical NO sensor with transimpedance AFE |
| **Patient Vitals Monitor (BLE)** | Medical | BGM220 · BLE 5.0 · MAX30102 · GATT | Custom GATT profile · sub-500nA sleep |
| **ECG Monitoring System** | Medical | nRF52840 · AD8232 · MAX30100 · BLE 5.0 | 500 SPS · lead-off detection · GATT streaming |
| **Industrial IoT Data Logger** | Industrial | ESP32 · RS485 · 4–20mA · ADS1115 · MQTT | Multi-input logger with TFT display |
| **IoT Payphone System** | IoT | Raspberry Pi · RC522 · GSM · REST API | 2500+ units deployed in field |
| **ULP BLE Temperature Logger** | IoT | BGM220 · BLE 5.0 · Energy Harvesting | nA sleep current · coin-cell multi-year operation |
| **Smart Wrist Wearable** | Wearable | BGM220 · MAX30102 · CCS811 · BLE 5.0 | Vitals + air quality · sensor fusion |
| **Modern Flame Diya** | Personal | ATtiny85 · WS2812 · KiCad · Custom PCB | USB-C powered · touch control · custom gold PCB |

---

## Technical Skills

| Domain | Skills |
|---|---|
| **MCU Platforms** | STM32F4/F7/H7 · nRF52840 · nRF52832 · Si Labs BGM220 · ESP32/S3/C3 · ATtiny85 · RP2040 · Raspberry Pi |
| **Languages** | Embedded C · C++ · Python · MicroPython |
| **RTOS** | FreeRTOS · Zephyr RTOS · Embedded Linux |
| **Wireless** | Bluetooth LE 5.3 · LoRa/LoRaWAN · Wi-Fi · GSM · Thread · Zigbee |
| **Protocols** | SPI · I²C · UART · CAN · RS-485 · Modbus · USB · MIPI · MQTT |
| **Hardware & PCB** | KiCad · EasyEDA Pro · Altium Designer · Analog AFE · ULP Design · Multi-layer PCB · LTspice |
| **Debug & Test** | JTAG/SWD · Logic Analyser · Oscilloscope · Power Profiler · BT Protocol Analyser · Python Serial Tools |
| **Standards** | IEC 62304 (Class B) · IEC 60601-1-8 |
| **Tools** | VS Code · STM32CubeIDE · Simplicity Studio · Segger · ESP-IDF · nRF SDK · PlatformIO · Git · AWS IoT |

---

## Education

**B.Tech — Electronics & Communication Engineering**
Guru Nanak College of Engineering &nbsp;·&nbsp; *2016 – 2019*

**Diploma — Electronics & Communication Engineering**
Jyothishmathi Institute of Technology &nbsp;·&nbsp; *2013 – 2016*

---

## Portfolio

This repository contains the source code for the professional portfolio website at [saikumar-mandaji.github.io](https://github.com/saikumar-mandaji).

**Stack:** HTML5 · CSS3 · Vanilla JS · Google Fonts · Unicons

**Sections:** Home · About · Skills · Experience · Projects (14) · Tech Blog (9 articles) · Contact

The portfolio includes a standalone print-ready HTML resume (`resume.html`) that can be exported directly to PDF via the browser.
