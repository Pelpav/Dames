/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_e039=["checkersCtrl","Rouge","Blanc","player","x","y","isKing","isChoice","matados","newGame","redScore","blackScore","board","setStyling","#FF0000","#A3A3A3","none","setClass","green","black","white","select","log","length","slice","indexOf","push"," wins!","Stalemate","controller","Checkers","module"];
angular[_$_e039[31]](_$_e039[30],[])[_$_e039[29]](_$_e039[0],function($scope,$timeout)
{
	var _0x16EA5=_$_e039[1],_0x16DCC=_$_e039[2],_0x16DEB=8,_0x16EE3=null;//4
	function _0x16E86(_0x16FBC,_0x16F7E,_0x16F9D)
	{
		this[_$_e039[3]]= _0x16FBC;this[_$_e039[4]]= _0x16F7E;this[_$_e039[5]]= _0x16F9D;this[_$_e039[6]]= false;this[_$_e039[7]]= false;this[_$_e039[8]]= []
	}
	$scope[_$_e039[9]]= function()
	{
		$scope[_$_e039[3]]= _0x16EA5;$scope[_$_e039[10]]= 0;$scope[_$_e039[11]]= 0;$scope[_$_e039[12]]= [];for(var _0x16F21=0;_0x16F21< _0x16DEB;_0x16F21++)
		{
			$scope[_$_e039[12]][_0x16F21]= [];for(var _0x16F40=0;_0x16F40< _0x16DEB;_0x16F40++)
			{
				if((_0x16F21=== 0&& _0x16F40% 2=== 0)|| (_0x16F21=== 1&& _0x16F40% 2=== 1)|| (_0x16F21=== 2&& _0x16F40% 2=== 0))
				{
					$scope[_$_e039[12]][_0x16F21][_0x16F40]=  new _0x16E86(_0x16DCC,_0x16F40,_0x16F21)
				}
				else 
				{
					if((_0x16F21=== _0x16DEB- 2&& _0x16F40% 2=== 0)|| (_0x16F21=== _0x16DEB- 1&& _0x16F40% 2=== 1)|| (_0x16F21=== _0x16DEB- 3&& _0x16F40% 2=== 1))
					{
						$scope[_$_e039[12]][_0x16F21][_0x16F40]=  new _0x16E86(_0x16EA5,_0x16F40,_0x16F21)
					}
					else 
					{
						$scope[_$_e039[12]][_0x16F21][_0x16F40]=  new _0x16E86(null,_0x16F40,_0x16F21)
					}
					
				}
				
			}
			
		}
		
	}
	;$scope[_$_e039[9]]();$scope[_$_e039[13]]= function(_0x16F5F)
	{
		if(_0x16F5F[_$_e039[3]]=== _0x16EA5)
		{
			return {backgroundColor:_$_e039[14]}
		}
		else 
		{
			if(_0x16F5F[_$_e039[3]]=== _0x16DCC)
			{
				return {backgroundColor:_$_e039[15]}
			}
			
		}
		//41
		return {backgroundColor:_$_e039[16]}
	}
	;$scope[_$_e039[17]]= function(_0x16F5F)
	{
		if(_0x16F5F[_$_e039[5]]% 2=== 0)
		{
			if(_0x16F5F[_$_e039[4]]% 2=== 0)
			{
				return {backgroundColor:_0x16F5F[_$_e039[7]]?_$_e039[18]:_$_e039[19]}
			}
			else 
			{
				return {backgroundColor:_$_e039[20]}
			}
			
		}
		else 
		{
			if(_0x16F5F[_$_e039[4]]% 2=== 1)
			{
				return {backgroundColor:_0x16F5F[_$_e039[7]]?_$_e039[18]:_$_e039[19]}
			}
			else 
			{
				return {backgroundColor:_$_e039[20]}
			}
			
		}
		
	}
	;$scope[_$_e039[21]]= function(_0x16F5F)
	{
		if(_0x16EE3!== null&&  !_0x16F5F[_$_e039[3]])
		{
			_0x16E67(_0x16F5F);_0x16EC4()
		}
		else 
		{
			if(_0x16F5F[_$_e039[3]]=== $scope[_$_e039[3]])
			{
				_0x16EE3= _0x16F5F;_0x16EC4();_0x16F02(_0x16EE3[_$_e039[4]],_0x16EE3[_$_e039[5]],1,[],-1,-1,_0x16EE3[_$_e039[6]])
			}
			else 
			{
				_0x16EE3= null
			}
			
		}
		//63
		console[_$_e039[22]]($scope[_$_e039[12]])
	}
	;function _0x16EC4()
	{
		for(var _0x16F21=0;_0x16F21< _0x16DEB;_0x16F21++)
		{
			for(var _0x16F40=0;_0x16F40< _0x16DEB;_0x16F40++)
			{
				$scope[_$_e039[12]][_0x16F21][_0x16F40][_$_e039[7]]= false;$scope[_$_e039[12]][_0x16F21][_0x16F40][_$_e039[8]]= []
			}
			
		}
		
	}
	function _0x16E67(_0x16F5F)
	{
		if(_0x16F5F[_$_e039[7]])
		{
			var _0x16FFA=_0x16EE3[_$_e039[6]];//96
			for(var _0x16F21=0;_0x16F21< _0x16F5F[_$_e039[8]][_$_e039[23]];_0x16F21++)
			{
				var _0x17019=_0x16F5F[_$_e039[8]][_0x16F21];//99
				_0x16E48(_0x17019);_0x16FFA= _0x16FFA|| _0x16DAD(_0x17019[_$_e039[4]],_0x17019[_$_e039[5]])
			}
			//98
			_0x16F5F[_$_e039[3]]= _0x16EE3[_$_e039[3]];_0x16F5F[_$_e039[6]]= _0x16FFA|| _0x16E29(_0x16F5F);_0x16EE3[_$_e039[3]]= null;_0x16EE3[_$_e039[6]]= false;$scope[_$_e039[3]]= $scope[_$_e039[3]]=== _0x16EA5?_0x16DCC:_0x16EA5
		}
		
	}
	function _0x16E29(_0x16F5F)
	{
		if($scope[_$_e039[3]]=== _0x16EA5)
		{
			if(_0x16F5F[_$_e039[5]]=== 0)
			{
				return true
			}
			
		}
		else 
		{
			if(_0x16F5F[_$_e039[5]]=== _0x16DEB- 1)
			{
				return true
			}
			
		}
		//113
		return false
	}
	function _0x16DAD(_0x16F7E,_0x16F9D)
	{
		return (($scope[_$_e039[3]]=== _0x16EA5&& _0x16F9D== 1)|| ($scope[_$_e039[3]]=== _0x16DCC&& _0x16F9D== _0x16DEB- 2))
	}
	function _0x16E48(_0x16FDB)
	{
		_0x16FDB[_$_e039[3]]= null;_0x16FDB[_$_e039[6]]= false;if($scope[_$_e039[3]]=== _0x16EA5)
		{
			$scope[_$_e039[10]]++;if($scope[_$_e039[10]]=== 8)
			{
				$timeout(function()
				{
					_0x16E0A(_0x16EA5)
				}
				,50)
			}
			
		}
		else 
		{
			$scope[_$_e039[11]]++;if($scope[_$_e039[11]]=== 8)
			{
				$timeout(function()
				{
					_0x16E0A(_0x16DCC)
				}
				,50)
			}
			
		}
		
	}
	function _0x16F02(_0x16F7E,_0x16F9D,_0x17038,_0x170F2,_0x17111,_0x17130,_0x16E29)
	{
		if(_0x17038> 10)
		{
			return
		}
		//149
		_0x16E29= _0x16E29|| ($scope[_$_e039[3]]=== _0x16EA5&& _0x16F9D== 0)|| ($scope[_$_e039[3]]=== _0x16DCC&& _0x16F9D== _0x16DEB- 1);if($scope[_$_e039[3]]=== _0x16EA5|| _0x16E29)
		{
			if(_0x16F7E> 0&& _0x16F9D> 0)
			{
				var _0x1714F=$scope[_$_e039[12]][_0x16F9D- 1][_0x16F7E- 1];//158
				if(_0x1714F[_$_e039[3]])
				{
					if(_0x1714F[_$_e039[3]]!== $scope[_$_e039[3]])
					{
						if(_0x16F7E> 1&& _0x16F9D> 1&&  !(_0x16F7E- 2=== _0x17111&& _0x16F9D- 2=== _0x17130))
						{
							var _0x1716E=$scope[_$_e039[12]][_0x16F9D- 2][_0x16F7E- 2];//162
							if(!_0x1716E[_$_e039[3]])
							{
								_0x1716E[_$_e039[7]]= true;var _0x17057=_0x170F2[_$_e039[24]](0);//165
								if(_0x17057[_$_e039[25]](_0x1714F)===  -1)
								{
									_0x17057[_$_e039[26]](_0x1714F)
								}
								//166
								_0x1716E[_$_e039[8]]= _0x17057;_0x16F02(_0x16F7E- 2,_0x16F9D- 2,_0x17038+ 1,_0x17057,_0x16F7E,_0x16F9D,_0x16E29)
							}
							
						}
						
					}
					
				}
				else 
				{
					if(_0x17038=== 1)
					{
						_0x1714F[_$_e039[7]]= true
					}
					
				}
				
			}
			//157
			if(_0x16F7E< _0x16DEB- 1&& _0x16F9D> 0)
			{
				var _0x1718D=$scope[_$_e039[12]][_0x16F9D- 1][_0x16F7E+ 1];//179
				if(_0x1718D[_$_e039[3]])
				{
					if(_0x1718D[_$_e039[3]]!== $scope[_$_e039[3]])
					{
						if(_0x16F7E< _0x16DEB- 2&& _0x16F9D> 1&&  !(_0x16F7E+ 2=== _0x17111&& _0x16F9D- 2=== _0x17130))
						{
							var _0x171AC=$scope[_$_e039[12]][_0x16F9D- 2][_0x16F7E+ 2];//187
							if(!_0x171AC[_$_e039[3]])
							{
								_0x171AC[_$_e039[7]]= true;var _0x17057=_0x170F2[_$_e039[24]](0);//190
								if(_0x17057[_$_e039[25]](_0x1718D)===  -1)
								{
									_0x17057[_$_e039[26]](_0x1718D)
								}
								//191
								_0x171AC[_$_e039[8]]= _0x17057;_0x16F02(_0x16F7E+ 2,_0x16F9D- 2,_0x17038+ 1,_0x17057,_0x16F7E,_0x16F9D,_0x16E29)
							}
							
						}
						
					}
					
				}
				else 
				{
					if(_0x17038=== 1)
					{
						_0x1718D[_$_e039[7]]= true
					}
					
				}
				
			}
			
		}
		//155
		if($scope[_$_e039[3]]=== _0x16DCC|| _0x16E29)
		{
			if(_0x16F7E> 0&& _0x16F9D< _0x16DEB- 1)
			{
				var _0x17076=$scope[_$_e039[12]][_0x16F9D+ 1][_0x16F7E- 1];//207
				if(_0x17076[_$_e039[3]])
				{
					if(_0x17076[_$_e039[3]]!== $scope[_$_e039[3]])
					{
						if(_0x16F7E> 1&& _0x16F9D< _0x16DEB- 2&&  !(_0x16F7E- 2=== _0x17111&& _0x16F9D+ 2=== _0x17130))
						{
							var _0x17095=$scope[_$_e039[12]][_0x16F9D+ 2][_0x16F7E- 2];//215
							if(!_0x17095[_$_e039[3]])
							{
								_0x17095[_$_e039[7]]= true;var _0x17057=_0x170F2[_$_e039[24]](0);//218
								if(_0x17057[_$_e039[25]](_0x17076)===  -1)
								{
									_0x17057[_$_e039[26]](_0x17076)
								}
								//219
								_0x17095[_$_e039[8]]= _0x17057;_0x16F02(_0x16F7E- 2,_0x16F9D+ 2,_0x17038+ 1,_0x17057,_0x16F7E,_0x16F9D,_0x16E29)
							}
							
						}
						
					}
					
				}
				else 
				{
					if(_0x17038=== 1)
					{
						_0x17076[_$_e039[7]]= true
					}
					
				}
				
			}
			//206
			if(_0x16F7E< _0x16DEB- 1&& _0x16F9D< _0x16DEB- 1)
			{
				var _0x170B4=$scope[_$_e039[12]][_0x16F9D+ 1][_0x16F7E+ 1];//233
				if(_0x170B4[_$_e039[3]])
				{
					if(_0x170B4[_$_e039[3]]!== $scope[_$_e039[3]])
					{
						if(_0x16F7E< _0x16DEB- 2&& _0x16F9D< _0x16DEB- 2&&  !(_0x16F7E+ 2=== _0x17111&& _0x16F9D+ 2=== _0x17130))
						{
							var _0x170D3=$scope[_$_e039[12]][_0x16F9D+ 2][_0x16F7E+ 2];//241
							if(!_0x170D3[_$_e039[3]])
							{
								_0x170D3[_$_e039[7]]= true;var _0x17057=_0x170F2[_$_e039[24]](0);//244
								if(_0x17057[_$_e039[25]](_0x170B4)===  -1)
								{
									_0x17057[_$_e039[26]](_0x170B4)
								}
								//245
								_0x170D3[_$_e039[8]]= _0x17057;_0x16F02(_0x16F7E+ 2,_0x16F9D+ 2,_0x17038+ 1,_0x17057,_0x16F7E,_0x16F9D,_0x16E29)
							}
							
						}
						
					}
					
				}
				else 
				{
					if(_0x17038=== 1)
					{
						_0x170B4[_$_e039[7]]= true
					}
					
				}
				
			}
			
		}
		
	}
	function _0x16E0A(_0x16FBC)
	{
		if(_0x16FBC)
		{
			alert(_0x16FBC+ _$_e039[27])
		}
		else 
		{
			alert(_$_e039[28])
		}
		
	}
	
}
)
