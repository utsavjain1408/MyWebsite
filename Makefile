rundist:gulp doall
		npm start

push:	docker build -t utsavjain/mywebsite:V4 .
		docker push utsavjain/mywebsite:V4