import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  SafeAreaView,
  StyleSheet,
} from 'react-native';

function Capital() {
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [incomeDescription, setIncomeDescription] = useState('');
  const [expenseDescription, setExpenseDescription] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const total = transactions.reduce((acc, cur) => acc + cur.amount, 0);
    setIncome(total >= 0 ? total : 0);
    setExpense(total < 0 ? -total : 0);
  }, [transactions]);

  const handleAddIncome = () => {
    setIsModalOpen(true);
  };

  const handleAddIncomeConfirm = () => {
    if (incomeDescription && income !== 0) {
      setTransactions([
        ...transactions,
        {
          amount: income,
          description: incomeDescription,
          type: 'income',
        },
      ]);
      setIncome(0);
      setIncomeDescription('');
      setIsModalOpen(false);
    }
  };

  const handleAddExpense = () => {
    setIsModalOpen(true);
  };

  const handleAddExpenseConfirm = () => {
    if (expenseDescription && expense !== 0) {
      setTransactions([
        ...transactions,
        {
          amount: -expense,
          description: expenseDescription,
          type: 'expense',
        },
      ]);
      setExpense(0);
      setExpenseDescription('');
      setIsModalOpen(false);
    }
  };

  return (
    <SafeAreaView style={styles.generalPadding}>
      {/* ingresos */}
      <View>
        <Text style={styles.text}>Total: {income - expense}</Text>
      </View>
      <View style={styles.fixToText}>
        <View>
          <Text style={styles.text}>Ingresos ${income}</Text>
          <Button
            title="Agregar ingreso"
            onPress={handleAddIncome}
            style={{
              backgroundColor: 'blue',
              color: 'white',
            }}
          />
        </View>

        <View>
          <Text style={styles.text}>Gastos ${expense}</Text>
          <Button title="Agregar gasto" onPress={handleAddExpense} />
        </View>
      </View>

      <Modal visible={isModalOpen} animationType="slide">
        <View>
          <Text>Agregar ingreso</Text>
          <TextInput
            keyboardType="numeric"
            // placeholder="Monto"
            value={income.toString()}
            onChangeText={value => setIncome(Number(value))}
          />
          <TextInput
            placeholder="Descripción"
            value={incomeDescription}
            onChangeText={value => setIncomeDescription(value)}
          />
          {/* <View style={styles.fixToText}> */}
          <Button title="Agregar" onPress={handleAddIncomeConfirm} />
          <Button title="Cancelar" onPress={() => setIsModalOpen(false)} />
          {/* </View> */}
        </View>
      </Modal>
      {/* ingresos */}

      {/* gastos */}

      <Modal visible={isModalOpen} animationType="slide">
        <View>
          <TextInput
            keyboardType="numeric"
            // placeholder="Monto"
            value={expense.toString()}
            onChangeText={value => setExpense(Number(value))}
          />
          <TextInput
            placeholder="Descripción"
            value={expenseDescription}
            onChangeText={value => setExpenseDescription(value)}
          />
          {/* <View style={styles.fixToText}> */}
          <Button title="Agregar" onPress={handleAddExpenseConfirm} />
          <Button title="Cancelar" onPress={() => setIsModalOpen(false)} />
          {/* </View> */}
        </View>
      </Modal>

      <View>
        <Text>Historial</Text>
        {transactions.map((transaction, index) => (
          <View key={index}>
            <Text>
              {transaction.type === 'income' && '+'} {transaction.amount}
            </Text>
            <Text></Text>
            <Text>{transaction.description}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonIncome: {
    margin: 10,
    backgroundColor: 'blue',
    color: 'white',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  generalPadding: {
    padding: '5%',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
  },
});

export default Capital;
