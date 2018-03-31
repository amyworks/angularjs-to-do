angular
	.module('to-do', [])
	.controller('ToDoController', ToDoController);
 
	function ToDoController() {
		this.tasks = [
			{'description':'Walk the cat', 'completedTask': false}, 
			{'description':'Eat second breakfast', 'completedTask': false}, 
			{'description':'Watch Rocky cutscenes on youtube since too tired to workout', 'completedTask': false}
		];

		this.createTask = () => {
			this.tasks.push( {'description':this.taskName, 'completedTask': false} );
			this.taskName = '';
		};

		this.completeTask = (index) => {
			console.log(this.tasks[index].completedTask);
			if(this.tasks[index].completedTask === false){
				this.tasks[index].completedTask = true;
			}else{
				this.tasks[index].completedTask = false;
			};
			console.log(this.tasks[index].completedTask);
		};

		this.deleteTask = (index) => {
			this.tasks.splice(index, 1);
		};
	}