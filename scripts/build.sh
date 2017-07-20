web-ext build -s ../dedup/ -a ../dist/
for i in ../dist/*.zip ; do mv "$i" "${i%.zip}.xpi" ; done