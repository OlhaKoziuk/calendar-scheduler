# Event Calendar App
This project is a React Native application that allows users to create, edit, and delete events on a calendar.
It ensures no overlapping events, and all events are stored locally, so they persist after the app is restarted.

 ## Installation & Setup
1️⃣ Clone the repository
To get started, clone the repository and navigate to the project folder:

### `git clone https://github.com/OlhaKoziuk/calendar-scheduler.git`
### `cd event-calendar-app`

2️⃣ Install dependencies
Make sure you have Node.js installed.

Run the following command to install project dependencies:

### `npm install`
or if you prefer Yarn:

### `yarn install`

3️⃣ Run the project
Start the Expo development server with the following command:

### `npx expo start`

4️⃣ Open the app
📱 On a physical device:
Install Expo Go from the
[App Store (iOS)](https://apps.apple.com/app/expo-go/id982107779)
or
[Google Play Store (Android)](https://play.google.com/store/apps/details?id=host.exp.exponent)
Scan the QR code in the terminal using Expo Go to open the app on your phone.
💻 On an emulator:
On an Android Emulator: Press
"a"
On an iOS Simulator (Mac only): Press
"i"

## Features
🔹 Managing Events
Users can click on the calendar to manage events on specific dates.
Available actions:
Create a new event – Enter an event name, set a time, and choose a repeat option.
Edit an existing event – Modify the event name, time, or repeat option.
Delete an event – Remove an event by clicking the delete button.
🔹 Repeat Options
Events can be recurring with the following options:

Weekly – The event recurs every week.
Bi-weekly – The event recurs every other week.
Monthly – The event recurs every month.
🔹 Event Restrictions
Users must click "Save" to confirm event creation.
Past dates are viewable, but users cannot create or edit events in the past.
Overlapping events are not allowed – the system prevents booking events with conflicting time slots.
🔹 Event Storage
All events are stored locally, so they remain after the app is restarted.
🔹 Calendar Display
Dates with scheduled events are highlighted accordingly:
Occupied dates are marked purple 🟣
Selected event periods are marked yellow 🟡

## Tech Stack
React Native – UI development
Redux Toolkit – State management
Expo – Framework for running React Native applications
react-native-calendars – Calendar component
react-native-modal-datetime-picker – Date & time picker

## Key Implementations
🔹 Preventing Overlapping Events
If a user tries to create an event in a time slot that is already booked, they receive an alert, and the event won't be created.

🔹 Blocking Past Dates
Users can view past events, but they cannot create or edit events in past dates.

🔹 Local Storage
All events are stored locally, so data remains after app restarts.

## How It Works
1️⃣ Creating an Event
Click on a date in the calendar.
Enter the event name, time, and select a repeat option (optional).
Click "Save" to confirm.
2️⃣ Editing an Event
Click on an existing event.
Modify the event name, time, or repeat option.
Click "Save Changes" to update.
3️⃣ Deleting an Event
Click on an existing event.
Press the "Delete" button.
📌 Additional Notes
Dates with events are highlighted in purple 🟣
If a date is already booked, it is disabled, meaning users cannot schedule another event on it.
Events automatically repeat based on the selected frequency.
✅ Future Improvements
Cloud storage integration (Firebase, AsyncStorage, or SQLite).
Push notifications for upcoming events.
User authentication to sync events across devices.
📩 Support
If you have any issues, feel free to open an issue on GitHub or contact the developer.

🚀 Now you’re ready to manage your events! 🎉📅
