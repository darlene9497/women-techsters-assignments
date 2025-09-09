# Banking Assignment  

## 📌 Task  
- Create **4 accounts** as objects.  
- Each account should have:  
  - `name`  
  - `balance`  
  - `currency`  
  - `type` (e.g., `"Savings"`, `"Checking"`)  

### Operations to Simulate  
1. **Deposits**  
   - Add different deposit amounts to two accounts.  
   - Show the new balances.  

2. **Withdrawals**  
   - Attempt withdrawals from two accounts.  
   - If the balance is insufficient, print:  
     `"Withdrawal denied for <name>: insufficient funds"`  

3. **Transfers**  
   - Transfer money between two accounts **only if they have the same currency**.  
   - If currencies are different, print:  
     `"Transfer failed: currency mismatch"`  

4. **Monthly Maintenance**  
   - If account type is `"Savings"`, add interest (e.g., 2% of balance).  
   - If account type is `"Checking"`, deduct fees (e.g., 50 units).  

5. **Comparisons**  
   - Print out the account with the **highest balance**.  
   - Print out the account with the **lowest balance**.  

6. **Account Status Check**  
   - If balance > 0 → `"Active"`  
   - If balance === 0 → `"Empty"`  
   - If balance < 0 → `"Overdrawn"`  

7. **Transaction Summary**  
   - After all operations, print all accounts with **final balances and statuses** in a clean format.  

## ✅ My Solution  
File: `banking.js`  

- Created 4 account objects with the required properties.  
- Added deposits to two accounts and displayed their updated balances.  
- Simulated withdrawals, denying transactions when funds were insufficient.  
- Handled transfers with proper checks for currency mismatches.  
- Applied monthly maintenance: interest for savings, fees for checking.  
- Compared all accounts to determine the highest and lowest balances.  
- Checked account statuses: Active, Empty, Overdrawn.  
- Printed a clear transaction summary of all accounts.  

## 🔄 What I Learned  
- How to create and manipulate **objects** in JavaScript.  
- How to use **if/else conditions** to implement rules and restrictions.  
- How to simulate real-world banking operations with code.  
- How to compare object values to find maximum and minimum balances.  
- How to produce a **summary report** by combining data and conditions.  
