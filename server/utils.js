module.exports = {
	toUnderscore: string => (
		string.replace( /([A-Z])/g, ( $1 ) => '_' + $1.toLowerCase())
  )
}
