const INPUT=document.getElementById(`input`)
const INPUT_REFLECTION=document.getElementById(`input-reflection`)
const TERMINAL=document.getElementById(`terminal`)
let data={}
terminalUpdate(0,`<p class="feedback-landing">Welcome to this interactive web terminal.</p>`)
terminalUpdate(0,`<p class="feedback-landing">For a list of available commands, type <span class="command" onclick="terminalUpdate(1,this.innerHTML);COMMANDS.help.function(this.innerHTML)">'help'</span>.</p>`)
function submitCommand(key){
	INPUT.value=``
	INPUT_REFLECTION.innerHTML=``
	document.getElementById(`command-prefix`).innerHTML=`user:`
	terminalUpdate(1,key)
	const FEEDBACK_LOST=`<p><span class="feedback-lost">Command not found. For a list of commands, type <span class="command" onclick="terminalUpdate(1,this.innerHTML);COMMANDS.help.function(this.innerHTML)">'help'</span>.</p>`
	COMMANDS[key]
		?COMMANDS[key].function()
		:COMMANDS[commandsDirectory]
			?COMMANDS[commandsDirectory].children[key]
				?COMMANDS[commandsDirectory].children[key].function()
				:terminalUpdate(0,FEEDBACK_LOST)
			:terminalUpdate(0,FEEDBACK_LOST)}
function terminalUpdate(isCommand,content){
	isCommand
		?TERMINAL.insertAdjacentHTML(`beforeend`,`<p><span class='subtle-element'>user:</span> ${content}`)
		:TERMINAL.insertAdjacentHTML(`beforeend`,content)
	window.scrollTo(0,document.body.scrollHeight)}