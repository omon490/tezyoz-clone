import React, {Component} from 'react'
import Preview from './prev'
import Speed from './Speed'
import getText from './getText'

const initialState = {
  text: getText(),
  userInput: '',
  symbols: 0,
  sec: 0,
  started: false,
  finished: false,
}

class App extends Component {

  state = initialState

  onRefresh = () => {
    this.setState({text: getText(), userInput: '', symbols: 0, sec: 0, finished: false, started: false})
  }

  onRestart = () => {
    this.setState({userInput: '', symbols: 0, sec: 0, finished: false, started: false})
  }

  onUserInputChange = (evt) => {
    const v = evt.target.value
    this.setTimer()
    this.onFinish(v)
    this.setState({
      userInput: v,
      symbols: this.countCorrectSymbols(v)
    })
  }

  onFinish(userInput) {
    if(userInput === this.state.text) {
      clearInterval(this.interval)
      this.setState({
        finished: true
      })
    }
  }

  countCorrectSymbols(userInput) {
    const text = this.state.text.replace(' ', '')
    return userInput.replace(' ', '').split('').filter((s, i) => s === text[i]).length
  }

  setTimer() {
    if(!this.state.started) {
      this.setState({started: true})
      this.interval = setInterval(() => {
        this.setState(prevProps => {
          return {sec: prevProps.sec + 1}
        })
      },1000)
    }
  }

  render () {
    return (
      <div className="container mt-5 mb-5">
        <h2 className="text-center">Tezyoz.uz ning kloni</h2>
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <Preview text={this.state.text} userInput={this.state.userInput} />
            <textarea className="form-control mb-3"
            placeholder="Start typing..."
            value={this.state.userInput}
            onChange={this.onUserInputChange}
            readOnly={this.state.finished}>
            </textarea>
            <Speed sec={this.state.sec} symbols={this.state.symbols}  />
            <div className="text-right">
              <button className="btn btn-light mr-3" onClick={this.onRefresh}>Boshqa matn</button>
              <button className="btn btn-light" onClick={this.onRestart}>Restart</button>
            </div>
          </div>
        </div>

      </div>
      )
    }
  }
  export default App;
