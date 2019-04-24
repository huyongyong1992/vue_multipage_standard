#cd F:\xiaoxiao_tech\mobile_multi_webapp
# echo "Begin git pull"
# git pull
# #npm install
# npm run build
# echo "Success build admin vue"
# rm -rf ./www/admin/
# echo "Success del admin"
# cd ./www/
# mkdir admin
# cd ../
# cp -r dist/* www/admin/
# echo "Success copy admin"

echo "请输入要打的包（test/build）："
read packageName
case $packageName in
	'test') 
		git pull
		echo "npm installing... please wait a minute"
		npm install
		echo "npm installed, run testing..."
		npm run test
		echo "success build test package"
		rm -rf ./www/test/
		cd ./www/
		mkdir test
		cd ../
		cp -r dist/* www/test
		echo "success copy test package"
	;;						#;;表示break
	'build') 
		git pull
		echo "npm installing... please wait a minute"
		npm install
		echo "npm installed, run building..."
		npm run test
		echo "success build product package"
		rm -rf ./www/production/
		cd ./www/
		mkdir production
		cd ../
		cp -r dist/* www/production
		echo "success copy production package"
	;;
	*) echo 
		git pull
		echo "npm installing... please wait a minute"
		npm install
		npm run dev
	;;
esac