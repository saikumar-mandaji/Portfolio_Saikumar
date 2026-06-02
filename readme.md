# Saikumar Mandaji
**Embedded Firmware Engineer · PCB Designer · IoT Systems**

Hyderabad, Telangana, India &nbsp;|&nbsp; [mandajisaikumar@gmail.com](mailto:mandajisaikumar@gmail.com) &nbsp;|&nbsp; [+91 70957 97212](tel:+917095797212) &nbsp;|&nbsp; [LinkedIn](https://linkedin.com/in/mandaji-saikumar) &nbsp;|&nbsp; [GitHub](https://github.com/saikumar-mandaji)

---

## Professional Summary

Embedded Firmware Engineer with **5+ years** delivering production-grade firmware for medical devices, industrial IoT platforms, and smart wearables. Expertise in ARM Cortex MCUs (STM32, nRF52840, Si Labs BGM220), Bluetooth LE 5.0 stack, RTOS-based multi-task architectures, and hardware-firmware co-design achieving **sub-500nA sleep currents**. Experience across the full product lifecycle — sensor integration, PCB design, cloud connectivity, and field deployment of **2500+ devices**.

---

## Experience

### Embedded Firmware Engineer
**Caropet Technologies Pvt Ltd** &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; *Apr 2024 — Present*

- Architected firmware for **5+ medical devices** — oxygen therapy systems, therapeutic gas monitors, and PediaSense pediatric monitor — on STM32 and Si Labs BGM220, with focus on safety-critical reliability and real-time data acquisition.
- Achieved **sub-500nA sleep current** on BGM220-based BLE wearables through hardware-firmware co-optimisation — deep sleep modes, peripheral power gating, and wake-on-event architecture.
- Designed custom BLE GATT profiles and beacon systems — advertising payload packing, CCCD state management, MTU negotiation, and reconnection watchdog for reliable medical fleet monitoring.
- Implemented safety-critical alarm firmware — dedicated high-priority RTOS alarm task independent of measurement tasks, hardware watchdog integration, and non-volatile alarm state persistence across power cycles.
- Designed analog front-end signal conditioning for electrochemical gas sensors, SpO₂/PPG, pressure, and thermistor inputs across medical device product lines.
- Built Python UART debug tooling — real-time plotters, binary struct parsers, BLE beacon sniffers, and automated calibration scripts for production firmware validation.

---

### IoT & Firmware Developer
**Niltech Pvt Ltd** &nbsp;·&nbsp; Hyderabad, India &nbsp;·&nbsp; *Apr 2020 — Apr 2024*

- Built **BeetleGuard** LoRa monitoring system with FreeRTOS task architecture supporting 250 sensor nodes/hub; **5 production hubs** currently active in the field with AWS IoT cloud integration.
- Delivered end-to-end firmware for **2500+ deployed smart card payphones**: RFID authentication, GSM calling, Raspberry Pi cloud sync, REST API, and remote fleet management dashboard.
- Developed industrial IoT data loggers on ESP32 supporting RS485/Modbus, 4–20mA, and 0–10V analog inputs with real-time MQTT cloud synchronisation.
- Prototyped ECG monitoring system on nRF52840 with physiological signal acquisition, lead-off detection, and BLE GATT streaming to a mobile app.
- Integrated TF Lite and MediaPipe ML inference on ESP32-S3 for vision-based edge applications; automated device validation with Python serial test tooling.

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
| **Oxygen Therapy System** | Medical | STM32 · MAX30102 · Flow Control Valve | SpO₂ closed-loop control with safety-critical alarm architecture |
| **Therapeutic Gas Monitor** | Medical | STM32 · Electrochemical Sensor · Analog AFE | Gas concentration monitoring with fail-safe alarms |
| **Patient Vitals Monitor (BLE)** | Medical | BGM220 · BLE 5.0 · MAX30102 · GATT | Custom GATT profile · sub-500nA sleep current |
| **ECG Monitoring System** | Medical | nRF52840 · ECG AFE · BLE 5.0 | Physiological signal acquisition · BLE GATT streaming |
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
| **PCB Design** | EasyEDA Pro |
| **Debug & Test** | JTAG/SWD · Logic Analyser · Oscilloscope · Power Profiler · BT Protocol Analyser · Python Serial Tools |
| **Medical Domain** | Safety-Critical Firmware · Medical Alarms · Analog AFE |
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
