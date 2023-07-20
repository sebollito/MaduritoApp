## Getting Started
To set up your development environment for running React Native projects on Android, you need to install and configure the following:

**Java Development Kit (JDK):** React Native requires JDK to be installed on your system. You can download the latest version of JDK from the Oracle website: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html

After installation, make sure to set the JAVA_HOME environment variable to the JDK installation directory.

**Android Studio:** Android Studio provides the Android development environment and tools required for building and running React Native apps on Android. You can download Android Studio from the official website: https://developer.android.com/studio

During installation, make sure to select the "Android Virtual Device (AVD)" option and install the necessary Android SDK components.

### **NOTE:** No setie el android home, ni agregue lo platform-tools al path, no se si ya los tenia setiados(lo dudo), pero me funciono sin hacer esos pasos, como sea te los puse aqui.

**Configure ANDROID_HOME environment variable:** After installing Android Studio and SDK, you need to set the **ANDROID_HOME** environment variable to the Android SDK directory. This variable is used by React Native to locate the necessary Android tools.

The **ANDROID_HOME** environment variable should point to the root directory of the Android SDK, such as **C:\Users\YourUsername\AppData\Local\Android\Sdk on Windows** or **/Users/YourUsername/Library/Android/sdk** on macOS.

To configure the **ANDROID_HOME** environment variable, you'll need to set it to the location where you've installed the Android SDK. Follow these steps based on your operating system:

### Windows:

Open the Start menu and search for "Environment Variables."

Click on "Edit the system environment variables."

In the System Properties window, click the "Environment Variables" button at the bottom.

In the Environment Variables window, under "System variables," click the "New" button.

Enter **ANDROID_HOME** as the variable name.

Set the variable value to the path where you've installed the Android SDK. For example, **C:\Users\YourUsername\AppData\Local\Android\Sdk**.

Click "OK" to save the changes.


### macOS:

Open Terminal (you can find it in the Utilities folder or use Spotlight search).

Open your shell configuration file (**.bash_profile**, **.bashrc**, or **.zshrc**, depending on your setup). You can use the following command to open it in a text editor:


**bash**

```nano ~/.bash_profile```

Add the following line to the file, replacing **/path/to/Android/Sdk** with the actual path where you've installed the Android SDK:


**javascript**

```export ANDROID_HOME=/path/to/Android/Sdk```

Save the file by pressing **Ctrl+O** (or **Cmd+O**), then press **Enter**.

Exit the text editor by pressing **Ctrl+X** (or **Cmd+X**).

**Note:** If you are using Zsh instead of Bash, modify the **.zshrc** file instead of **.bash_profile**.


### Linux:

Open Terminal.

Open your shell configuration file (usually **.bashrc** or **.zshrc**). You can use the following command to open it in a text editor:


**bash**

```nano ~/.bashrc```

Add the following line to the file, replacing /path/to/Android/Sdk with the actual path where you've installed the Android SDK:


**javascript**

```export ANDROID_HOME=/path/to/Android/Sdk```

Save the file by pressing **Ctrl+O**, then press **Enter**.

Exit the text editor by pressing **Ctrl+X**.

**Verify the Configuration:**

After configuring the **ANDROID_HOME** environment variable, close and reopen any terminal or command prompt windows for the changes to take effect.

To verify that it's configured correctly, open a new terminal window and run the following command:


**bash**

```echo $ANDROID_HOME```

If the setup is correct, this command should display the path to your Android SDK directory.

With the **ANDROID_HOME** environment variable correctly set, you should be able to run React Native commands that rely on the Android SDK without any issues.


#### Additionally, you need to add the Android platform tools to your system's PATH variable. Edit your system's PATH variable and append the following path:

**Windows:** %ANDROID_HOME%\platform-tools

**macOS/Linux:** $ANDROID_HOME/platform-tools


## Setting up the Development Environment
### Android Studio

Open **Android Studio**

Click on **More Actions**

![image](https://github.com/sebollito/MaduritoApp/assets/25035777/49f09995-d985-49f5-9859-211c1b1d9293)

Click on **Virtual Device Manager**

![image](https://github.com/sebollito/MaduritoApp/assets/25035777/9a01bdf1-8f6a-4b72-9262-6839ac92809a)

Click on the **Play Button** of a created Android Device.

![image](https://github.com/sebollito/MaduritoApp/assets/25035777/5faf4078-f598-4e05-a894-e0ee3409559b)

### **Note:** If you don't have an existing **AVD**, follow the next steps to configure an **Android Virtual Device (AVD)** using the **AVD Manager**. Here's how you can do it:

**Open Android Studio:** Launch Android Studio on your computer.

**Open AVD Manager:** Once Android Studio is open, go to the "Configure" menu (located at the bottom right corner) and select "AVD Manager."

**Create a New Virtual Device:** In the AVD Manager, click on the "Create Virtual Device" button.

**Select Hardware Profile:** Choose a hardware profile that matches the specifications of the virtual device you want to emulate. For example, you can choose a Pixel device for a stock Android experience.

**Select System Image:** Next, you need to choose the system image for the Android version you want to emulate. Click on "Download" next to the system image you need, and Android Studio will download and install it.

**Configure AVD:** After downloading the system image, you'll be taken to the "Verify Configuration" screen. Here, you can customize additional settings like device orientation, scale, RAM size, and more. Adjust the settings according to your requirements.

**Complete AVD Creation:** Once you're satisfied with the configuration, click the "Finish" button.

**Launch AVD:** You will now see your newly created AVD in the AVD Manager's list. To start the emulator, click on the green play button (usually located under the "Actions" column) next to your AVD's name.

Open your app on VS Code

To run the app, simply run:

```npm install```

```npx expo start```

After the Metro Builder has finished, press **"A"** on the keyboard to launch the App on the emulated **Android virtual device**.

### **NOTE:** The emulated android device has to be already open and resting on the home screen for Expo to launch the app correctly.

In case the app is not loading changes or there is some funky behavior going on, 

close the app completely and type **"A"** on the console to open the app again, 

also you can type **"R"** to reload the app while its running. 

## NOTA: si durante la instalacion de las dependencias o al momento de correr "npx expo start" ocurre un error por alguna dependencia, no utilizo "npx expo install", ni "yarn install" aunque los prompts en consola digan asi, lo que hago es que instalo las depencias requeridas mediante "npm install"
