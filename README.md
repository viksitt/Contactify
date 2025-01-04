# Contactify
Here’s a feature list with descriptions for your contact management app:


### **Feature 1: Add & Update Contacts**
**Description:** 
Users can add new contacts by entering a name and email, or update existing contact details with the "Edit" feature. The app provides a form to input contact details and, on submitting, the information is either saved as a new contact or updated in real-time using Firebase Firestore.

---

### **Feature 2: Real-Time Contact Synchronization**
**Description:** 
The app uses Firebase's real-time data syncing capabilities to ensure that any updates or additions to the contact list are instantly reflected across all devices. This enables seamless collaboration and ensures that users always have the most up-to-date information.

---

### **Feature 3: Contact Search**
**Description:** 
A built-in search feature allows users to quickly filter and find contacts by name. As the user types in the search bar, the contact list dynamically updates, showing only the relevant contacts that match the search query.

---

### **Feature 4: Contact Deletion**
**Description:** 
Contacts can be easily removed from the list. Users can click on the trash icon next to a contact to delete it permanently. Confirmation ensures no accidental deletions occur.

---

### **Feature 5: Send Email Feature**
**Description:** 
With a click of a button, users can quickly draft and send an email to any contact. The app pre-fills the email with the contact’s name and a default subject, providing a convenient and efficient way to reach out to contacts directly from the app.

---

### **Feature 6: Mobile-Optimized Interface**
**Description:** 
The app is designed with mobile devices in mind, ensuring that users have an optimized experience. The interface is clean, responsive, and easy to navigate, providing a smooth and intuitive experience for adding, updating, and managing contacts.

---

### **Feature 7: Toast Notifications**
**Description:** 
To keep users informed, toast notifications are used for important actions such as adding, updating, or deleting contacts. These brief messages provide real-time feedback on the success or failure of each action.

---

### **Feature 8: Modal Forms for Adding/Editing Contacts**
**Description:** 
The app uses modal windows to add or edit contacts. This ensures a seamless user experience where users don’t have to leave the main interface to add new contacts or update existing ones. The forms are user-friendly and guide users through the process.

---

### **Feature 9: Error Handling and Validation**
**Description:** 
Input fields for adding or updating contacts are validated using Formik and Yup. Users are notified of any missing or incorrect information (e.g., invalid email format), ensuring that only valid contact information is saved.

---

### **Feature 10: Firebase Cloud Storage Integration**
**Description:** 
All contacts are stored in Firebase Firestore, which ensures fast, reliable, and scalable storage. This also provides automatic backups and guarantees that the contact data is available from any device.

