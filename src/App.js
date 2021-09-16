import { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import NewEntryForm from './components/NewEntryForm';
import MainHeader from './components/MainHeader';
import DisplayBalance from './components/DisplayBalance';
import DisplayBalances from './components/DisplayBalances';
import EntryLines from './components/EntryLines';
import ModalEdit from './components/ModalEdit'


function App() {
  const [entries, setEntries] = useState(initialEnteris)
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setEntryId] = useState()
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setexpEnseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description
      newEntries[index].value = value
      newEntries[index].isExpense = isExpense
      setEntries(newEntries)
      resetEntry()
    }
  }, [isOpen])

  useEffect(() => {
    let totalIncomes = 0
    let totalExpenses = 0
    entries.map((entry) => {
      if (entry.isExpense) {
        return (totalExpenses += Number(entry.value))

      }
      return (totalIncomes += Number(entry.value))
    })
    setTotal(totalIncomes - totalExpenses)
    setexpEnseTotal(totalExpenses)
    setIncomeTotal(totalIncomes)

    // console.log(`total expenses are ${totalExpenses}`)
    // console.log(`total incomes are ${totalIncomes}`)

  }, [entries])
  const deleteEntry = (id) => {
    const result = entries.filter(entry => entry.id !== id)
    setEntries(result)
  }
  const editEntry = (id) => {
    console.log(`edit enter wuth id ${id}`)
    if (id) {
      const index = entries.findIndex(entry => entry.id === id)
      const entry = entries[index]
      setEntryId(id)
      setDescription(entry.description)
      setValue(entry.value)
      setIsExpense(entry.isExpense)
      setIsOpen(true)
    }

  }
  const addEntry = () => {
    const result = entries.concat({
      id: entries.length + 1,
      description,
      value,
      isExpense
    })
    //console.log('result', result)
    setEntries(result)
    resetEntry()
  }
  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)
  }

  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance title="Your Balance" value={total} size='small' />

      <DisplayBalances
        expenseTotal={expenseTotal}
        incomeTotal={incomeTotal}
      />
      <MainHeader title="History" type="h3" />

      <EntryLines
        deleteEntry={deleteEntry}
        entries={entries}
        editEntry={editEntry}
      />

      <MainHeader title="Add new transaction" type="h3" />
      <NewEntryForm
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}
      />
      <ModalEdit
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        addEntry={addEntry}
        description={description}
        setDescription={setDescription}
        value={value}
        setValue={setValue}
        isExpense={isExpense}
        setIsExpense={setIsExpense}

      />

    </Container>
  );
}

export default App;

var initialEnteris = [
  {
    id: 1,
    description: "work income",
    value: 1000,
    isExpense: false
  },
  {
    id: 2,
    description: "Water bill",
    value: 20.00,
    isExpense: true
  },
  {
    id: 3,
    description: "rent",
    value: 30,
    isExpense: true
  },
  {
    id: 4,
    description: "Power bill",
    value: 50,
    isExpense: true
  }

]