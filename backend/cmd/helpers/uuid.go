package uuid

import (
	gouuid "github.com/nu7hatch/gouuid"
)

func New() string {
	uid, _ := gouuid.NewV4()
	return uid.String()
}
